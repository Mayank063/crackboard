const companyGrid = document.getElementById("companyGrid");
const detailPanel = document.getElementById("detailPanel");
const detailTitle = document.getElementById("detailTitle");
const problemList = document.getElementById("problemList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const closeDetail = document.getElementById("closeDetail");

function totalFor(c) {
  return c.easy + c.medium + c.hard;
}

// Rank companies by total reported volume — this is a genuine ranking,
// so numbering them is meaningful rather than decorative.
const RANKED = [...COMPANIES].sort((a, b) => totalFor(b) - totalFor(a));

function renderStats() {
  const totalProblems = COMPANIES.reduce((sum, c) => sum + totalFor(c), 0);
  document.getElementById("statOrgs").textContent = COMPANIES.length;
  document.getElementById("statProblems").textContent = totalProblems.toLocaleString();
  document.getElementById("navCount").textContent = COMPANIES.length;
  updateOverallSolved();
}

function updateOverallSolved() {
  const el = document.getElementById("statSolved");
  if (!el) return;
  let total = 0;
  COMPANIES.forEach((c) => { total += solvedCountFor(c.id); });
  el.textContent = total;
}

function renderCompanies(list) {
  companyGrid.innerHTML = "";
  emptyState.classList.toggle("hidden", list.length > 0);

  list.forEach((c) => {
    const rank = RANKED.findIndex((r) => r.id === c.id) + 1;
    const total = totalFor(c);
    const ePct = (c.easy / total) * 100;
    const mPct = (c.medium / total) * 100;
    const hPct = (c.hard / total) * 100;

    const card = document.createElement("div");
    card.className = "company-card";
    card.innerHTML = `
      <div class="card-rank">#${String(rank).padStart(2, "0")}</div>
      <div class="card-name">${titleCase(c.name)}</div>
      <div class="card-total"><b>${total}</b> reported questions</div>
      <div class="tick-row">
        <div class="tick tick-easy" style="flex-grow:${ePct}"></div>
        <div class="tick tick-medium" style="flex-grow:${mPct}"></div>
        <div class="tick tick-hard" style="flex-grow:${hPct}"></div>
      </div>
      <div class="card-breakdown">
        <span>E <b>${c.easy}</b></span>
        <span>M <b>${c.medium}</b></span>
        <span>H <b>${c.hard}</b></span>
      </div>
      <div class="card-open">${solvedBadge(c.id)}Open file</div>
    `;
    card.addEventListener("click", () => openDetail(c));
    companyGrid.appendChild(card);
  });
}

function solvedBadge(companyId) {
  const solved = solvedCountFor(companyId);
  return solved > 0 ? `<span class="card-solved-badge">${solved} solved · </span>` : "";
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w) => (w.length <= 3 && w === w.toLowerCase() ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

function openDetail(company) {
  const problems = PROBLEMS[company.id] || [];
  detailTitle.textContent = titleCase(company.name);

  problemList.innerHTML = problems.length
    ? problems
        .sort((a, b) => b.freq - a.freq)
        .map(
          (p) => `
        <div class="problem-row">
          <input type="checkbox" class="solved-checkbox" data-company="${company.id}" data-title="${p.title.replace(/"/g, '&quot;')}" ${isSolved(company.id, p.title) ? "checked" : ""} />
          <div>
            <div class="problem-title ${isSolved(company.id, p.title) ? "done" : ""}">${p.title}</div>
            <div class="problem-topic">${p.topic}</div>
          </div>
          <span class="problem-diff diff-${p.difficulty.toLowerCase()}">${p.difficulty}</span>
          <span class="problem-freq">freq ${p.freq}</span>
          <a href="${p.link}" target="_blank" rel="noopener" class="problem-solve-link" title="Solve on LeetCode">Solve ↗</a>
          <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(p.title + " leetcode explanation")}" target="_blank" rel="noopener" class="problem-video-link" title="Watch explanation on YouTube">▶ Explain</a>
        </div>`
        )
        .join("")
    : `<div class="problem-row"><span class="problem-title">No sample problems loaded for this company yet.</span></div>`;

  updateDossierProgress(company.id, problems.length);

  document.querySelectorAll(".solved-checkbox").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const nowSolved = toggleSolved(e.target.dataset.company, e.target.dataset.title);
      e.target.nextElementSibling.querySelector(".problem-title").classList.toggle("done", nowSolved);
      updateDossierProgress(company.id, problems.length);
      updateOverallSolved();
    });
  });

  detailPanel.classList.remove("hidden");
  detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateDossierProgress(companyId, total) {
  const solved = solvedCountFor(companyId);
  const el = document.getElementById("dossierProgress");
  if (!el) return;
  const pct = total ? Math.round((solved / total) * 100) : 0;
  el.innerHTML = `
    <div class="dossier-progress-track"><div class="dossier-progress-fill" style="width:${pct}%"></div></div>
    <span class="dossier-progress-label">${solved}/${total} tracked solved</span>
  `;
}

closeDetail.addEventListener("click", () => detailPanel.classList.add("hidden"));

searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = RANKED.filter((c) => c.name.toLowerCase().includes(q));
  renderCompanies(filtered);
  renderSearchSuggestions(q, filtered);

  if (q) {
    // switch to Board tab so the filtered results are visible if the user scrolls down —
    // no forced auto-scroll here, since that fights with mobile keyboards trying to
    // keep the input in view and causes a jarring jump.
    const boardTab = document.querySelector('.nav-tab[data-view="board"]');
    if (boardTab && !boardTab.classList.contains("active")) boardTab.click();
  }
});

const searchSuggestions = document.getElementById("searchSuggestions");

function renderSearchSuggestions(query, filtered) {
  if (!query) { searchSuggestions.classList.add("hidden"); searchSuggestions.innerHTML = ""; return; }
  const top = filtered.slice(0, 6);
  if (!top.length) {
    searchSuggestions.innerHTML = `<div class="search-suggestion" style="cursor:default;">No matches</div>`;
    searchSuggestions.classList.remove("hidden");
    return;
  }
  searchSuggestions.innerHTML = top
    .map((c) => `<div class="search-suggestion" data-id="${c.id}"><span>${titleCase(c.name)}</span><span class="search-suggestion-count">${totalFor(c)} Qs</span></div>`)
    .join("");
  searchSuggestions.classList.remove("hidden");

  searchSuggestions.querySelectorAll("[data-id]").forEach((row) => {
    row.addEventListener("click", () => {
      const company = COMPANIES.find((c) => c.id === row.dataset.id);
      const boardTab = document.querySelector('.nav-tab[data-view="board"]');
      if (boardTab && !boardTab.classList.contains("active")) boardTab.click();
      searchSuggestions.classList.add("hidden");
      searchInput.value = "";
      renderCompanies(RANKED);
      openDetail(company);
    });
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-search")) searchSuggestions.classList.add("hidden");
});
searchInput.addEventListener("focus", () => {
  if (searchInput.value.trim()) searchSuggestions.classList.remove("hidden");
});

renderStats();
renderCompanies(RANKED);

/* ==================== TAB SWITCHING ==================== */
const navTabs = document.querySelectorAll(".nav-tab");
const views = { board: document.getElementById("view-board"), patterns: document.getElementById("view-patterns"), compare: document.getElementById("view-compare"), practice: document.getElementById("view-practice"), plan: document.getElementById("view-plan"), progress: document.getElementById("view-progress") };

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    navTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    Object.values(views).forEach((v) => v.classList.add("hidden"));
    views[tab.dataset.view].classList.remove("hidden");
    if (tab.dataset.view === "board") detailPanel.classList.add("hidden");
    if (tab.dataset.view === "patterns") renderPatterns();
    if (tab.dataset.view === "compare") renderCompareOptions();
    if (tab.dataset.view === "plan") initPlanSetup();
    if (tab.dataset.view === "progress") renderProgress();
  });
});

/* ==================== QUICK PICKS ==================== */
const QUICK_PICK_IDS = ["google", "amazon", "meta", "microsoft", "tcs", "infosys", "bloomberg"];
function renderQuickPicks() {
  const el = document.getElementById("quickPicks");
  const picks = QUICK_PICK_IDS.map((id) => COMPANIES.find((c) => c.id === id)).filter(Boolean);
  el.innerHTML = picks
    .map((c) => `<div class="quick-pick" data-id="${c.id}">${titleCase(c.name)}</div>`)
    .join("");
  el.querySelectorAll(".quick-pick").forEach((chip) => {
    chip.addEventListener("click", () => {
      const company = COMPANIES.find((c) => c.id === chip.dataset.id);
      openDetail(company);
    });
  });
}
renderQuickPicks();

/* ==================== PATTERNS VIEW ==================== */
function renderPatterns() {
  const counts = {};
  Object.values(PROBLEMS).forEach((list) => {
    list.forEach((p) => {
      const topics = (p.topic || "General").split(",").map((t) => t.trim()).filter(Boolean);
      topics.forEach((t) => { counts[t] = (counts[t] || 0) + 1; });
    });
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 25);
  const max = sorted.length ? sorted[0][1] : 1;

  document.getElementById("patternList").innerHTML = sorted
    .map(
      ([name, count]) => `
      <div class="pattern-row">
        <div class="pattern-name">${name}</div>
        <div class="pattern-bar-track"><div class="pattern-bar-fill" style="width:${(count / max) * 100}%"></div></div>
        <div class="pattern-count">${count}</div>
      </div>`
    )
    .join("");
}

/* ==================== COMPARE VIEW ==================== */
function renderCompareOptions() {
  const selA = document.getElementById("compareA");
  const selB = document.getElementById("compareB");
  if (selA.options.length) { renderCompare(); return; }
  const opts = RANKED.map((c) => `<option value="${c.id}">${titleCase(c.name)}</option>`).join("");
  selA.innerHTML = opts;
  selB.innerHTML = opts;
  if (RANKED.length > 1) selB.selectedIndex = 1;
  selA.addEventListener("change", renderCompare);
  selB.addEventListener("change", renderCompare);
  renderCompare();
}

function renderCompare() {
  const a = COMPANIES.find((c) => c.id === document.getElementById("compareA").value);
  const b = COMPANIES.find((c) => c.id === document.getElementById("compareB").value);
  if (!a || !b) return;

  const colHtml = (c) => {
    const total = totalFor(c);
    return `
      <div class="compare-col">
        <h3>${titleCase(c.name)}</h3>
        <div class="compare-stat"><span>Total questions</span><b>${total}</b></div>
        <div class="compare-stat"><span>Easy</span><b>${c.easy}</b></div>
        <div class="compare-stat"><span>Medium</span><b>${c.medium}</b></div>
        <div class="compare-stat"><span>Hard</span><b>${c.hard}</b></div>
      </div>`;
  };

  const titlesA = new Set((PROBLEMS[a.id] || []).map((p) => p.title));
  const overlap = (PROBLEMS[b.id] || []).filter((p) => titlesA.has(p.title));

  document.getElementById("compareResult").innerHTML =
    colHtml(a) +
    colHtml(b) +
    `<div class="compare-overlap">
      <h4>Shared top problems (${overlap.length})</h4>
      <div class="compare-overlap-list">
        ${overlap.length ? overlap.map((p) => `<span class="overlap-chip">${p.title}</span>`).join("") : `<span style="color:var(--text-dim); font-size:13px;">No overlap in each company's top-12 list.</span>`}
      </div>
    </div>`;
}

/* ==================== PRACTICE VIEW ==================== */
let practiceTimerInterval = null;

function initPracticeSetup() {
  const sel = document.getElementById("practiceCompany");
  sel.innerHTML = RANKED.map((c) => `<option value="${c.id}">${titleCase(c.name)}</option>`).join("");
}
initPracticeSetup();

document.getElementById("startPractice").addEventListener("click", () => {
  const companyId = document.getElementById("practiceCompany").value;
  const count = parseInt(document.getElementById("practiceCount").value, 10);
  const minutes = parseInt(document.getElementById("practiceMinutes").value, 10);
  const difficultyFilter = document.getElementById("practiceDifficulty").value;
  let pool = [...(PROBLEMS[companyId] || [])];

  if (difficultyFilter === "unsolved") {
    pool = pool.filter((p) => !isSolved(companyId, p.title));
  } else if (difficultyFilter !== "any") {
    pool = pool.filter((p) => p.difficulty === difficultyFilter);
  }

  if (!pool.length) {
    document.getElementById("practiceList").innerHTML = `<p style="color:var(--text-dim)">No problems match that filter for this company — try a different difficulty.</p>`;
    document.getElementById("practiceSession").classList.remove("hidden");
    return;
  }

  // shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const chosen = pool.slice(0, count);

  document.getElementById("practiceList").innerHTML = chosen
    .map(
      (p, i) => `
      <label class="practice-item">
        <input type="checkbox" data-idx="${i}" />
        <span class="practice-item-title">${p.title} <span style="color:var(--text-dim); font-size:12px;">— ${p.difficulty}</span></span>
      </label>`
    )
    .join("");

  document.querySelectorAll(".practice-item input").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      e.target.nextElementSibling.classList.toggle("done", e.target.checked);
    });
  });

  document.getElementById("practiceSession").classList.remove("hidden");

  let remaining = minutes * 60;
  const timerEl = document.getElementById("practiceTimer");
  clearInterval(practiceTimerInterval);
  const tick = () => {
    const m = String(Math.floor(remaining / 60)).padStart(2, "0");
    const s = String(remaining % 60).padStart(2, "0");
    timerEl.textContent = `${m}:${s}`;
    timerEl.classList.toggle("low", remaining <= 60);
    if (remaining <= 0) { clearInterval(practiceTimerInterval); timerEl.textContent = "Time's up"; return; }
    remaining--;
  };
  tick();
  practiceTimerInterval = setInterval(tick, 1000);
});

/* ==================== SOLVED TRACKER (saved in this browser) ==================== */
const SOLVED_KEY = "crackboard_solved_v1";

function loadSolved() {
  try {
    const raw = localStorage.getItem(SOLVED_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function saveSolved(data) {
  try { localStorage.setItem(SOLVED_KEY, JSON.stringify(data)); } catch (e) { /* ignore quota errors */ }
}
function solvedKey(companyId, title) { return companyId + "::" + title; }
function isSolved(companyId, title) {
  const data = loadSolved();
  return !!data[solvedKey(companyId, title)];
}
function toggleSolved(companyId, title) {
  const data = loadSolved();
  const key = solvedKey(companyId, title);
  data[key] = !data[key];
  saveSolved(data);
  return data[key];
}
function solvedCountFor(companyId) {
  const data = loadSolved();
  const list = PROBLEMS[companyId] || [];
  return list.filter((p) => data[solvedKey(companyId, p.title)]).length;
}

/* ==================== STUDY PLAN VIEW ==================== */
function initPlanSetup() {
  const sel = document.getElementById("planCompany");
  if (!sel.options.length) {
    sel.innerHTML = RANKED.map((c) => `<option value="${c.id}">${titleCase(c.name)}</option>`).join("");
  }
}
initPlanSetup();

function renderPlanChecklist(companyId) {
  // re-render the currently displayed plan's checkboxes' solved state (used after toggling)
}

document.getElementById("generatePlan").addEventListener("click", () => {
  const companyId = document.getElementById("planCompany").value;
  const days = Math.max(1, Math.min(14, parseInt(document.getElementById("planDays").value, 10) || 1));
  const pool = [...(PROBLEMS[companyId] || [])].sort((a, b) => b.freq - a.freq);

  if (!pool.length) {
    document.getElementById("planOutput").innerHTML = `<p style="color:var(--text-dim)">No tracked problems for this company yet.</p>`;
    return;
  }

  // distribute problems across `days` buckets, round-robin so higher-frequency
  // problems are spread across early days rather than all dumped on day 1
  const buckets = Array.from({ length: days }, () => []);
  pool.forEach((p, i) => buckets[i % days].push(p));

  const html = buckets
    .map((dayProblems, i) => {
      if (!dayProblems.length) return "";
      const rows = dayProblems
        .map((p) => {
          const checked = isSolved(companyId, p.title) ? "checked" : "";
          const doneClass = isSolved(companyId, p.title) ? "done" : "";
          return `
          <label class="practice-item">
            <input type="checkbox" class="plan-checkbox" data-company="${companyId}" data-title="${p.title.replace(/"/g, '&quot;')}" ${checked} />
            <span class="practice-item-title ${doneClass}">${p.title} <span style="color:var(--text-dim); font-size:12px;">— ${p.difficulty}</span></span>
          </label>`;
        })
        .join("");
      return `
        <div class="plan-day">
          <div class="plan-day-head">Day ${i + 1} <span>${dayProblems.length} problem${dayProblems.length > 1 ? "s" : ""}</span></div>
          <div class="practice-list">${rows}</div>
        </div>`;
    })
    .join("");

  document.getElementById("planOutput").innerHTML = html;

  document.querySelectorAll(".plan-checkbox").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const isNowSolved = toggleSolved(e.target.dataset.company, e.target.dataset.title);
      e.target.nextElementSibling.classList.toggle("done", isNowSolved);
      updateOverallSolved();
    });
  });
});

/* ==================== SITE MAP TILE JUMP ==================== */
document.querySelectorAll("[data-tab-jump]").forEach((tile) => {
  tile.addEventListener("click", () => {
    const target = tile.dataset.tabJump;
    const tab = document.querySelector(`.nav-tab[data-view="${target}"]`);
    if (tab) tab.click();
    window.scrollTo({ top: document.querySelector(".board")?.offsetTop - 20 || 0, behavior: "smooth" });
  });
});

/* ==================== PROGRESS VIEW ==================== */
function renderProgress() {
  let totalSolved = 0;
  let totalTracked = 0;
  let companiesStarted = 0;

  const rows = RANKED.map((c) => {
    const tracked = (PROBLEMS[c.id] || []).length;
    const solved = solvedCountFor(c.id);
    totalSolved += solved;
    totalTracked += tracked;
    if (solved > 0) companiesStarted++;
    return { company: c, solved, tracked };
  }).filter((r) => r.tracked > 0);

  document.getElementById("progressTotalSolved").textContent = totalSolved;
  document.getElementById("progressTotalTracked").textContent = totalTracked;
  document.getElementById("progressCompaniesStarted").textContent = companiesStarted;
  document.getElementById("progressOverallFill").style.width = (totalTracked ? (totalSolved / totalTracked) * 100 : 0) + "%";

  // show companies you've started first, then the rest ranked as usual
  const started = rows.filter((r) => r.solved > 0).sort((a, b) => b.solved / b.tracked - a.solved / a.tracked);
  const notStarted = rows.filter((r) => r.solved === 0);
  const ordered = [...started, ...notStarted];

  const list = document.getElementById("progressCompanyList");
  if (!totalSolved) {
    list.innerHTML = `<p class="progress-empty">You haven't marked any problems solved yet — open a company on the Board and tick a few off.</p>`;
    return;
  }

  list.innerHTML = ordered
    .map(
      (r) => `
      <div class="progress-company-row" data-open="${r.company.id}">
        <div class="progress-company-name">${titleCase(r.company.name)}</div>
        <div class="progress-company-track"><div class="progress-company-fill" style="width:${(r.solved / r.tracked) * 100}%"></div></div>
        <div class="progress-company-count">${r.solved}/${r.tracked}</div>
      </div>`
    )
    .join("");

  list.querySelectorAll("[data-open]").forEach((row) => {
    row.addEventListener("click", () => {
      const boardTab = document.querySelector('.nav-tab[data-view="board"]');
      if (boardTab) boardTab.click();
      const company = COMPANIES.find((c) => c.id === row.dataset.open);
      openDetail(company);
    });
  });
}

document.getElementById("progressReset").addEventListener("click", () => {
  if (!confirm("Reset all solved progress across every company? This can't be undone.")) return;
  saveSolved({});
  renderProgress();
  updateOverallSolved();
});

/* ==================== STREAK COUNTER ==================== */
const STREAK_KEY = "crackboard_streak_v1";

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function daysBetween(a, b) {
  const d1 = new Date(a);
  const d2 = new Date(b);
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

function updateStreak() {
  let data;
  try { data = JSON.parse(localStorage.getItem(STREAK_KEY) || "null"); } catch (e) { data = null; }

  const today = todayStr();

  if (!data) {
    data = { lastVisit: today, streak: 1 };
  } else if (data.lastVisit === today) {
    // already counted today, no change
  } else {
    const gap = daysBetween(data.lastVisit, today);
    if (gap === 1) {
      data.streak += 1;
    } else if (gap > 1) {
      data.streak = 1;
    }
    data.lastVisit = today;
  }

  try { localStorage.setItem(STREAK_KEY, JSON.stringify(data)); } catch (e) { /* ignore */ }

  const el = document.getElementById("streakCount");
  if (el) el.textContent = data.streak;
}

updateStreak();
