# Villa Cavo — Haputale, Sri Lanka

Luxury villa website built with React, Tailwind CSS and Framer Motion.

The project is three separate git repositories and three separate Vercel projects. This repository
(`villacavo`) is the **public website only** (frontend). The other two can sit in folders here, which
`.gitignore` excludes, so they are never part of this repo or the website deploy.

| Folder | Repo | What | Local address |
|---|---|---|---|
| `/` (this folder) | `villacavo` | Public website (frontend) | http://localhost:5173 |
| `admin/` | [`villacavo-admin`](https://github.com/thisalkekirideniya-ui/villacavo-admin) | Admin panel (frontend) | http://localhost:5174 |
| `backend/` | `villacavo-backend` | Shared backend: API, storage, sign-in | http://localhost:5175 |

## Run the website
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Run everything locally (three terminals)
```bash
cd backend && npm install && npm run dev   # http://localhost:5175
cd admin   && npm install && npm run dev   # http://localhost:5174   (password "admin")
npm run dev                                # http://localhost:5173   (this website)
```
See each folder's own README for deploying it.

## How they connect
```
admin (5174) ──publish / upload──▶ backend (5175) ◀──GET /api/content── website (5173)
      └──────── Preview: sends the unpublished draft ────────────────────▶ website
```
- The backend stores content (Supabase, or Vercel Blob) and serves it at `/api/content`.
- The website reads it from `VITE_CONTENT_URL` (e.g. `https://villacavo-backend.vercel.app/api/content`)
  and layers it over its built-in defaults in `src/data/site.js` and `src/data/content.js`. If the backend
  is unreachable, the website still works with its last loaded or built-in content.
- `VITE_ADMIN_URL` (e.g. `https://villacavo-admin.vercel.app`) tells the website which admin may send it
  a draft for Preview.
- Website on Vercel: **Settings → Environment Variables** → add both, then redeploy.
- Contact form email uses EmailJS. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
  `VITE_EMAILJS_PUBLIC_KEY` in `.env.local` for development and in the website's Vercel environment,
  then redeploy.

## Pages
Home · About · Rooms & Suites · Experiences (services & spa) · Dining · Gallery · Contact (map + FAQ) · Book (reservation request) · 404
