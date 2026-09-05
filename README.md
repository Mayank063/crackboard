# CrackBoard — Interview Leaderboard (Starter)

A static, no-build-step website. Just 4 files:
- `index.html` — structure
- `styles.css` — terminal/hacker theme
- `script.js` — search + render logic
- `data.js` — sample company & problem data (swap this for real data later)

## Run locally
Just open `index.html` in a browser, or serve it:
```
npx serve .
```

## Deploy (free, ~5 minutes) — Vercel via GitHub

1. Create a GitHub repo and push this folder to it.
2. Go to vercel.com → sign in with GitHub → "Add New Project" → select the repo.
3. Framework preset: "Other" (it's static, no build command needed).
4. Click Deploy. You'll get a live URL like `leetcamp.vercel.app`.
5. (Optional) Buy a domain and attach it under Project → Settings → Domains.

## Deploy (even faster) — Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag this whole folder into the browser window.
3. Done — live URL instantly. Connect a GitHub repo later if you want auto-deploys on push.

## Next steps to make this real
- Replace `data.js` with a real dataset (scraped or from a GitHub company-wise-problems repo).
- Once data grows beyond a few hundred rows, move it into a real database
  (Supabase/Postgres is a good free option) and fetch it via an API instead of
  a hardcoded JS file.
