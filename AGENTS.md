<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deploy workflow

Never chain build → deploy → push automatically after a change. For every change (content or code):

1. Edit
2. Run `npm run dev` (or reuse the already-running dev server) and verify on localhost — desktop and mobile
3. Show/describe the change to the user and wait for explicit go-ahead
4. Only then, ship it (see below)

This applies to every change going forward, not just first-time setup.

## "Ship it"

When the user says **"ship it"** (or an equivalent explicit go-ahead to publish), that is the trigger for step 4 — run it without asking again:

1. `npm run build`
2. `npx wrangler pages deploy out --project-name portfolio-website --branch main`
3. `git add` the changed files (specific paths, not `-A`), `git commit` with a descriptive message, `git push origin master`

Build + deploy first so the live site is confirmed working before committing/pushing. If `git push` fails with `RPC failed; HTTP 400` (this machine's git is v2.8.2, quite old, and mishandles larger pushes over HTTP/2), retry with one-off flags — do not persist to git config:
`git -c http.postBuffer=524288000 -c http.version=HTTP/1.1 push origin master`

"Ship it" only covers steps already shown to and approved by the user per steps 1–3 above — it is not blanket permission to also make further, unreviewed edits.

# Brand

**Patent gradient** — the site's signature brand gradient (violet → fuchsia → orange). CSS var: `--gradient-signature` in `src/app/globals.css` (stops: `--grad-violet` `#8b5cf6`, `--grad-fuchsia` `#f0469b`, `--grad-orange` `#ff8a3d`). For SVG icons, reference the shared `<linearGradient id="patent-gradient">` rendered once via `PatentGradientDefs` (`src/components/site/patent-gradient-defs.tsx`) — apply with `fill="url(#patent-gradient)"` (brand marks) or `stroke="url(#patent-gradient)"` (outline icons like lucide). Used for: the "SW" avatar mark, the work-gate reveal flash, the About section glow, and social/brand icons.
