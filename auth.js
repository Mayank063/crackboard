/* ==================== SUPABASE CLIENT ==================== */
const SUPABASE_URL = "https://xopvoeihnaogneaqimrj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcHZvZWlobmFvZ25lYXFpbXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyMTcxNTksImV4cCI6MjEwNTc5MzE1OX0.shGV7IQo431yGmr_0I4pYcdtHoSnv3_bbJ2_LiKmeSk";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const ADMIN_EMAIL = "mayankguptaa063@gmail.com";
function isAdmin() { return !!currentUser && currentUser.email === ADMIN_EMAIL; }

let currentUser = null;
let currentUsername = null;

/* ==================== MODAL CONTROLS ==================== */
const authModal = document.getElementById("authModal");
function openAuthModal() { authModal.classList.remove("hidden"); }
function closeAuthModal() { authModal.classList.add("hidden"); }

document.getElementById("authSignInBtn").addEventListener("click", openAuthModal);
document.getElementById("authModalClose").addEventListener("click", closeAuthModal);
authModal.addEventListener("click", (e) => { if (e.target === authModal) closeAuthModal(); });

document.querySelectorAll(".auth-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".auth-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("authPanelSignin").classList.toggle("hidden", tab.dataset.authTab !== "signin");
    document.getElementById("authPanelSignup").classList.toggle("hidden", tab.dataset.authTab !== "signup");
  });
});

/* ==================== SIGN UP / SIGN IN / SIGN OUT ==================== */
document.getElementById("signupSubmit").addEventListener("click", async () => {
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const errEl = document.getElementById("signupError");
  errEl.classList.add("hidden");

  if (!email || password.length < 6) {
    errEl.textContent = "Enter a valid email and a password with at least 6 characters.";
    errEl.classList.remove("hidden");
    return;
  }

  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) {
    errEl.textContent = error.message;
    errEl.classList.remove("hidden");
    return;
  }
  if (data.session) {
    await onSignedIn(data.session.user);
    closeAuthModal();
  } else {
    errEl.textContent = "Check your email to confirm your account, then sign in.";
    errEl.classList.remove("hidden");
  }
});

document.getElementById("signinSubmit").addEventListener("click", async () => {
  const email = document.getElementById("signinEmail").value.trim();
  const password = document.getElementById("signinPassword").value;
  const errEl = document.getElementById("signinError");
  errEl.classList.add("hidden");

  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) {
    errEl.textContent = error.message;
    errEl.classList.remove("hidden");
    return;
  }
  await onSignedIn(data.user);
  closeAuthModal();
});

document.getElementById("authSignOutBtn").addEventListener("click", async () => {
  await sb.auth.signOut();
  currentUser = null;
  currentUsername = null;
  updateAuthUI();
});

async function onSignedIn(user) {
  currentUser = user;
  const { data: profile } = await sb.from("profiles").select("username").eq("id", user.id).single();
  currentUsername = profile ? profile.username : user.email;
  updateAuthUI();
  await syncSolvedFromCloud();
  await syncStreakWithCloud();
}

function updateAuthUI() {
  const signedIn = !!currentUser;
  document.getElementById("authSignInBtn").classList.toggle("hidden", signedIn);
  document.getElementById("authUser").classList.toggle("hidden", !signedIn);
  document.getElementById("authUsername").textContent = currentUsername || "";
  document.querySelectorAll(".auth-prompt").forEach((el) => el.classList.toggle("hidden", signedIn));
  const submitForm = document.getElementById("submitForm");
  if (submitForm) submitForm.classList.toggle("hidden", !signedIn);

  // the standalone theme/settings gear is only needed when signed out —
  // once signed in, "Appearance" inside the profile dropdown covers it
  const themeSwitcher = document.querySelector(".theme-switcher");
  if (themeSwitcher) themeSwitcher.classList.toggle("hidden", signedIn);

  if (signedIn) {
    const initial = (currentUsername || currentUser.email || "?").trim().charAt(0).toUpperCase();
    document.getElementById("authAvatar").textContent = initial;
    document.getElementById("authDropdownAvatar").textContent = initial;
    document.getElementById("authDropdownName").textContent = currentUsername || currentUser.email;
    refreshDropdownStats();
  }

  const profileSignedOut = document.getElementById("profileSignedOut");
  const profileSignedIn = document.getElementById("profileSignedIn");
  if (profileSignedOut && profileSignedIn) {
    profileSignedOut.classList.toggle("hidden", signedIn);
    profileSignedIn.classList.toggle("hidden", !signedIn);
  }

  const adminTab = document.getElementById("adminTab");
  if (adminTab) adminTab.classList.toggle("hidden", !isAdmin());
}

// restore session on page load
sb.auth.getSession().then(({ data }) => {
  if (data.session) onSignedIn(data.session.user);
  else updateAuthUI();
});

[document.getElementById("leaderboardSignInBtn"), document.getElementById("submitSignInBtn")].forEach((btn) => {
  if (btn) btn.addEventListener("click", openAuthModal);
});

/* ==================== SOLVED PROBLEMS: CLOUD SYNC ==================== */
// When signed in, pull the user's solved problems from Supabase and merge
// them into localStorage so the rest of the app's existing logic (which
// reads/writes localStorage) keeps working without changes.
async function syncSolvedFromCloud() {
  if (!currentUser) return;
  const { data, error } = await sb.from("solved_problems").select("company_id, problem_title").eq("user_id", currentUser.id);
  if (error || !data) return;

  const local = loadSolved();
  data.forEach((row) => {
    local[row.company_id + "::" + row.problem_title] = true;
  });
  saveSolved(local);

  // refresh whatever's currently on screen
  if (typeof renderCompanies === "function" && typeof RANKED !== "undefined") renderCompanies(RANKED);
  if (typeof updateOverallSolved === "function") updateOverallSolved();
}

// Called from script.js's toggleSolved wrapper below whenever a checkbox changes.
async function pushSolvedToCloud(companyId, title, isNowSolved) {
  if (!currentUser) return;
  if (isNowSolved) {
    await sb.from("solved_problems").upsert(
      { user_id: currentUser.id, company_id: companyId, problem_title: title },
      { onConflict: "user_id,company_id,problem_title" }
    );
  } else {
    await sb.from("solved_problems").delete().eq("user_id", currentUser.id).eq("company_id", companyId).eq("problem_title", title);
  }
}

/* ==================== STREAK: CLOUD SYNC ==================== */
async function syncStreakWithCloud() {
  if (!currentUser) return;
  const { data } = await sb.from("streaks").select("*").eq("user_id", currentUser.id).single();

  const local = JSON.parse(localStorage.getItem("crackboard_streak_v1") || "null");

  if (data && (!local || data.current_streak >= local.streak)) {
    // cloud has the more advanced (or equal) streak — trust it
    localStorage.setItem("crackboard_streak_v1", JSON.stringify({ lastVisit: data.last_visit, streak: data.current_streak }));
    const el = document.getElementById("streakCount");
    if (el) el.textContent = data.current_streak;
  }

  const finalLocal = JSON.parse(localStorage.getItem("crackboard_streak_v1") || "null");
  if (finalLocal) {
    await sb.from("streaks").upsert(
      {
        user_id: currentUser.id,
        current_streak: finalLocal.streak,
        longest_streak: Math.max(finalLocal.streak, data ? data.longest_streak : 0),
        last_visit: finalLocal.lastVisit,
      },
      { onConflict: "user_id" }
    );
  }
}

// Push a freshly-updated local streak to the cloud right away (called from
// script.js's recordSolveForStreak, right after the user marks a problem
// solved) — keeps the cloud/leaderboard in sync same-day, not just at login.
async function pushStreakToCloud(streakValue, lastVisit) {
  if (!currentUser) return;
  const { data: existing } = await sb.from("streaks").select("longest_streak").eq("user_id", currentUser.id).single();
  await sb.from("streaks").upsert(
    {
      user_id: currentUser.id,
      current_streak: streakValue,
      longest_streak: Math.max(streakValue, existing ? existing.longest_streak || 0 : 0),
      last_visit: lastVisit,
    },
    { onConflict: "user_id" }
  );
}

/* ==================== LEADERBOARD ==================== */
async function renderLeaderboard() {
  const list = document.getElementById("leaderboardList");
  list.innerHTML = `<p class="leaderboard-empty">Loading…</p>`;

  const { data, error } = await sb.from("leaderboard").select("*").order("solved_count", { ascending: false }).limit(50);

  if (error || !data || !data.length) {
    list.innerHTML = `<p class="leaderboard-empty">No one has solved anything yet — be the first!</p>`;
    return;
  }

  list.innerHTML = data
    .map(
      (row, i) => `
      <div class="leaderboard-row">
        <div class="leaderboard-rank">#${i + 1}</div>
        <div class="leaderboard-name">${row.username}</div>
        <div class="leaderboard-solved">${row.solved_count} solved</div>
        <div class="leaderboard-streak">🔥 ${row.current_streak}d</div>
      </div>`
    )
    .join("");
}

/* ==================== SUBMISSIONS ==================== */
document.getElementById("submitBtn").addEventListener("click", async () => {
  const company = document.getElementById("submitCompany").value.trim();
  const title = document.getElementById("submitTitle").value.trim();
  const difficulty = document.getElementById("submitDifficulty").value;
  const topic = document.getElementById("submitTopic").value.trim();
  const notes = document.getElementById("submitNotes").value.trim();
  const errEl = document.getElementById("submitError");
  const successEl = document.getElementById("submitSuccess");
  errEl.classList.add("hidden");
  successEl.classList.add("hidden");

  if (!company || !title) {
    errEl.textContent = "Company name and problem title are required.";
    errEl.classList.remove("hidden");
    return;
  }
  if (!currentUser) {
    errEl.textContent = "Please sign in first.";
    errEl.classList.remove("hidden");
    return;
  }

  const { error } = await sb.from("submissions").insert({
    user_id: currentUser.id,
    company_name: company,
    problem_title: title,
    difficulty: difficulty || null,
    topic: topic || null,
    notes: notes || null,
  });

  if (error) {
    errEl.textContent = error.message;
    errEl.classList.remove("hidden");
    return;
  }

  successEl.classList.remove("hidden");
  document.getElementById("submitCompany").value = "";
  document.getElementById("submitTitle").value = "";
  document.getElementById("submitDifficulty").value = "";
  document.getElementById("submitTopic").value = "";
  document.getElementById("submitNotes").value = "";
});

/* ==================== PROFILE ==================== */
[document.getElementById("profileSignInBtn")].forEach((btn) => {
  if (btn) btn.addEventListener("click", openAuthModal);
});

async function renderProfile() {
  if (!currentUser) return;

  document.getElementById("profileUsernameInput").value = currentUsername || "";
  document.getElementById("profileEmail").textContent = currentUser.email;
  document.getElementById("profileJoined").textContent = currentUser.created_at
    ? new Date(currentUser.created_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
    : "—";

  const { data: details } = await sb
    .from("profiles")
    .select("full_name, bio, target_company, linkedin_url, github_url")
    .eq("id", currentUser.id)
    .single();

  document.getElementById("profileFullName").value = (details && details.full_name) || "";
  document.getElementById("profileTargetCompany").value = (details && details.target_company) || "";
  document.getElementById("profileBio").value = (details && details.bio) || "";
  document.getElementById("profileLinkedin").value = (details && details.linkedin_url) || "";
  document.getElementById("profileGithub").value = (details && details.github_url) || "";

  const { count } = await sb
    .from("solved_problems")
    .select("*", { count: "exact", head: true })
    .eq("user_id", currentUser.id);
  document.getElementById("profileTotalSolved").textContent = count || 0;

  const { data: streakRow } = await sb.from("streaks").select("current_streak, longest_streak").eq("user_id", currentUser.id).single();
  document.getElementById("profileCurrentStreak").textContent = streakRow ? streakRow.current_streak : 0;
  document.getElementById("profileLongestStreak").textContent = streakRow ? streakRow.longest_streak : 0;

  await renderMySubmissions();
}

async function renderMySubmissions() {
  const list = document.getElementById("profileSubmissionsList");
  const empty = document.getElementById("profileSubmissionsEmpty");
  list.innerHTML = `<p class="progress-empty">Loading…</p>`;
  empty.classList.add("hidden");

  const { data, error } = await sb
    .from("submissions")
    .select("*")
    .eq("user_id", currentUser.id)
    .order("submitted_at", { ascending: false });

  if (error || !data || !data.length) {
    list.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  list.innerHTML = data
    .map(
      (row) => `
      <div class="admin-row">
        <div class="admin-row-main">
          <div class="admin-row-title">${row.problem_title} <span class="admin-row-company">— ${row.company_name}</span></div>
          <div class="admin-row-meta">${row.difficulty || "No difficulty"} · ${row.topic || "No topic"} · ${new Date(row.submitted_at).toLocaleDateString()}</div>
        </div>
        <div class="admin-row-status status-${row.status}">${row.status}</div>
      </div>`
    )
    .join("");
}

document.getElementById("profileSaveUsername").addEventListener("click", async () => {
  const input = document.getElementById("profileUsernameInput");
  const msg = document.getElementById("profileUsernameMsg");
  const newUsername = input.value.trim();

  msg.classList.remove("msg-success", "msg-error");

  if (newUsername.length < 3) {
    msg.textContent = "Username must be at least 3 characters.";
    msg.classList.add("msg-error");
    return;
  }

  const { error } = await sb.from("profiles").update({ username: newUsername }).eq("id", currentUser.id);

  if (error) {
    msg.textContent = error.message.includes("duplicate") ? "That username is already taken." : error.message;
    msg.classList.add("msg-error");
    return;
  }

  currentUsername = newUsername;
  document.getElementById("authUsername").textContent = newUsername;
  msg.textContent = "Saved!";
  msg.classList.add("msg-success");
});

// Edit Profile opens as its own separate page (like LeetCode's edit-profile
// page), not stacked inline under the main Profile view.
document.getElementById("openEditProfile").addEventListener("click", () => {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  const editView = document.getElementById("view-edit-profile");
  editView.classList.remove("hidden");
  editView.classList.remove("view-pop");
  void editView.offsetWidth;
  editView.classList.add("view-pop");
  editView.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("backToProfile").addEventListener("click", () => {
  const profileTab = document.querySelector('.nav-tab[data-view="profile"]');
  if (profileTab) profileTab.click();
});

document.getElementById("profileSaveDetails").addEventListener("click", async () => {
  const msg = document.getElementById("profileDetailsMsg");
  msg.classList.remove("msg-success", "msg-error");

  const updates = {
    full_name: document.getElementById("profileFullName").value.trim() || null,
    target_company: document.getElementById("profileTargetCompany").value.trim() || null,
    bio: document.getElementById("profileBio").value.trim() || null,
    linkedin_url: document.getElementById("profileLinkedin").value.trim() || null,
    github_url: document.getElementById("profileGithub").value.trim() || null,
  };

  const { error } = await sb.from("profiles").update(updates).eq("id", currentUser.id);

  if (error) {
    msg.textContent = "Something went wrong — please try again.";
    msg.classList.add("msg-error");
    return;
  }

  msg.textContent = "Saved!";
  msg.classList.add("msg-success");
});

/* ==================== ADMIN PANEL ==================== */
let adminStatusFilter = "pending";

document.querySelectorAll('.admin-filter-bar .filter-chip').forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll('.admin-filter-bar .filter-chip').forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    adminStatusFilter = chip.dataset.status;
    renderAdminPanel();
  });
});

async function renderAdminPanel() {
  if (!isAdmin()) return;
  const list = document.getElementById("adminList");
  const empty = document.getElementById("adminEmpty");
  list.innerHTML = `<p class="progress-empty">Loading…</p>`;
  empty.classList.add("hidden");

  const { data, error } = await sb
    .from("submissions")
    .select("*")
    .eq("status", adminStatusFilter)
    .order("submitted_at", { ascending: false });

  if (error || !data || !data.length) {
    list.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  list.innerHTML = data
    .map(
      (row) => `
      <div class="admin-row" data-id="${row.id}">
        <div class="admin-row-main">
          <div class="admin-row-title">${row.problem_title} <span class="admin-row-company">— ${row.company_name}</span></div>
          <div class="admin-row-meta">${row.difficulty || "No difficulty"} · ${row.topic || "No topic"} · ${new Date(row.submitted_at).toLocaleDateString()}</div>
          ${row.notes ? `<div class="admin-row-notes">${row.notes}</div>` : ""}
        </div>
        ${
          adminStatusFilter === "pending"
            ? `<div class="admin-row-actions">
                <button class="admin-approve" data-id="${row.id}">Approve</button>
                <button class="admin-reject" data-id="${row.id}">Reject</button>
              </div>`
            : `<div class="admin-row-status status-${row.status}">${row.status}</div>`
        }
      </div>`
    )
    .join("");

  list.querySelectorAll(".admin-approve").forEach((btn) => {
    btn.addEventListener("click", () => updateSubmissionStatus(btn.dataset.id, "approved"));
  });
  list.querySelectorAll(".admin-reject").forEach((btn) => {
    btn.addEventListener("click", () => updateSubmissionStatus(btn.dataset.id, "rejected"));
  });
}

async function updateSubmissionStatus(id, status) {
  await sb.from("submissions").update({ status }).eq("id", id);
  renderAdminPanel();
}

/* ==================== FEEDBACK (anyone can send, no login needed) ==================== */
const feedbackModal = document.getElementById("feedbackModal");
function openFeedbackModal() {
  const emailInput = document.getElementById("feedbackEmail");
  if (currentUser) { emailInput.value = currentUser.email; }
  feedbackModal.classList.remove("hidden");
}
function closeFeedbackModal() { feedbackModal.classList.add("hidden"); }

document.getElementById("feedbackFab").addEventListener("click", openFeedbackModal);
document.getElementById("feedbackModalClose").addEventListener("click", closeFeedbackModal);
feedbackModal.addEventListener("click", (e) => { if (e.target === feedbackModal) closeFeedbackModal(); });

document.getElementById("feedbackSubmitBtn").addEventListener("click", async () => {
  const category = document.getElementById("feedbackCategory").value;
  const message = document.getElementById("feedbackMessage").value.trim();
  const email = document.getElementById("feedbackEmail").value.trim();
  const errEl = document.getElementById("feedbackError");
  const successEl = document.getElementById("feedbackSuccess");
  errEl.classList.add("hidden");
  successEl.classList.add("hidden");

  if (!message) {
    errEl.textContent = "Please write a message before sending.";
    errEl.classList.remove("hidden");
    return;
  }

  const { error } = await sb.from("feedback").insert({
    user_id: currentUser ? currentUser.id : null,
    email: email || null,
    category,
    message,
  });

  if (error) {
    errEl.textContent = "Something went wrong — please try again.";
    errEl.classList.remove("hidden");
    return;
  }

  successEl.classList.remove("hidden");
  document.getElementById("feedbackMessage").value = "";
  setTimeout(closeFeedbackModal, 1600);
});

/* ==================== ADMIN: section toggle (Submissions / Feedback) ==================== */
document.querySelectorAll(".admin-section-tabs .filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".admin-section-tabs .filter-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const section = chip.dataset.adminSection;
    document.getElementById("adminSubmissionsSection").classList.toggle("hidden", section !== "submissions");
    document.getElementById("adminFeedbackSection").classList.toggle("hidden", section !== "feedback");
    if (section === "feedback") renderFeedbackAdmin();
  });
});

async function renderFeedbackAdmin() {
  if (!isAdmin()) return;
  const list = document.getElementById("feedbackAdminList");
  const empty = document.getElementById("feedbackAdminEmpty");
  list.innerHTML = `<p class="progress-empty">Loading…</p>`;
  empty.classList.add("hidden");

  const { data, error } = await sb.from("feedback").select("*").order("submitted_at", { ascending: false });

  if (error || !data || !data.length) {
    list.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  const unreadCount = data.filter((row) => row.status !== "reviewed").length;
  const badge = document.getElementById("feedbackUnreadBadge");
  if (badge) {
    badge.textContent = unreadCount;
    badge.classList.toggle("hidden", unreadCount === 0);
  }

  list.innerHTML = data
    .map(
      (row) => `
      <div class="admin-row ${row.status !== "reviewed" ? "unread" : ""}" data-id="${row.id}">
        <div class="admin-row-main">
          <div class="admin-row-title">
            <span class="feedback-row-category cat-${row.category}">${row.category}</span>
            ${row.email ? row.email : "Anonymous"}
          </div>
          <div class="admin-row-meta">${new Date(row.submitted_at).toLocaleString()}</div>
          <div class="admin-row-notes">${row.message}</div>
        </div>
        ${
          row.status !== "reviewed"
            ? `<button class="admin-mark-read" data-id="${row.id}">Mark read</button>`
            : `<div class="admin-row-status status-approved">reviewed</div>`
        }
      </div>`
    )
    .join("");

  list.querySelectorAll(".admin-mark-read").forEach((btn) => {
    btn.addEventListener("click", async () => {
      await sb.from("feedback").update({ status: "reviewed" }).eq("id", btn.dataset.id);
      renderFeedbackAdmin();
    });
  });
}

// refresh the unread-feedback badge count whenever the admin tab is opened
const _adminNavTab = document.querySelector('.nav-tab[data-view="admin"]');
if (_adminNavTab) {
  _adminNavTab.addEventListener("click", () => {
    if (isAdmin()) renderFeedbackAdmin();
  });
}

/* ==================== PROFILE DROPDOWN MENU ==================== */
async function refreshDropdownStats() {
  if (!currentUser) return;

  const { count: solvedCount } = await sb
    .from("solved_problems")
    .select("*", { count: "exact", head: true })
    .eq("user_id", currentUser.id);
  document.getElementById("menuSolvedCount").textContent = solvedCount || 0;

  const { data: streakRow } = await sb.from("streaks").select("current_streak").eq("user_id", currentUser.id).single();
  document.getElementById("menuStreakCount").textContent = "🔥" + (streakRow ? streakRow.current_streak : 0);

  const { count: submissionCount } = await sb
    .from("submissions")
    .select("*", { count: "exact", head: true })
    .eq("user_id", currentUser.id);
  document.getElementById("menuSubmissionCount").textContent = submissionCount || 0;
}

const authAvatarBtn = document.getElementById("authAvatarBtn");
const authDropdown = document.getElementById("authDropdown");

authAvatarBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  authDropdown.classList.toggle("hidden");
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".auth-user")) authDropdown.classList.add("hidden");
});

// any element inside the dropdown with data-jump="<tab>" switches to that nav tab
document.querySelectorAll("#authDropdown [data-jump]").forEach((el) => {
  el.addEventListener("click", () => {
    const tab = document.querySelector('.nav-tab[data-view="' + el.dataset.jump + '"]');
    if (tab) tab.click();
    authDropdown.classList.add("hidden");
  });
});

// "Appearance" opens the existing theme switcher menu
document.getElementById("authDropdownAppearance").addEventListener("click", (e) => {
  e.stopPropagation(); // prevent this same click from bubbling to document and
  // immediately re-closing the theme menu we're about to open below
  authDropdown.classList.add("hidden");
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) themeBtn.click();
});
