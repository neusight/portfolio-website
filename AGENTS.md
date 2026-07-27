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
3. Add a dated entry to `CHANGELOG.md` (newest first) summarizing what shipped in plain, user-facing language — not a raw dump of commit messages
4. `git add` the changed files (specific paths, not `-A`, but including `CHANGELOG.md`), `git commit` with a descriptive message, `git push origin master`

Build + deploy first so the live site is confirmed working before committing/pushing. If `git push` fails with `RPC failed; HTTP 400` (this machine's git is v2.8.2, quite old, and mishandles larger pushes over HTTP/2), retry with one-off flags — do not persist to git config:
`git -c http.postBuffer=524288000 -c http.version=HTTP/1.1 push origin master`

"Ship it" only covers steps already shown to and approved by the user per steps 1–3 above — it is not blanket permission to also make further, unreviewed edits.

# Known gotchas

**Sheet/Dialog (Radix) + in-page anchor links don't mix by default.** Any `<a href="#section">` rendered inside a shadcn `Sheet`/`Dialog` (`src/components/ui/sheet.tsx`) — e.g. the mobile nav menu in `navbar.tsx` — must NOT rely on `SheetClose asChild` wrapping the anchor and letting the browser's native hash-jump fire on click. Radix's dialog holds a body scroll lock while open/closing, and the close animation + scroll-lock teardown races the native anchor scroll — the URL hash updates but the page never visually scrolls, so the link looks broken (this happened for real in production once already — see `CHANGELOG.md`).

Fix pattern (already applied in `navbar.tsx`, copy it for any future Sheet nav): make the `Sheet` controlled (`open`/`onOpenChange` state you own), intercept the link's `onClick` with `preventDefault()`, close the sheet, THEN scroll to the target. **Don't wait for Radix's close animation to finish before scrolling — clear the lock yourself instead.** Two approaches were tried and both proved unreliable: a hardcoded `setTimeout(..., 320)` (races the lock under slower devices/repeated open-close), and a `MutationObserver` waiting for `document.body.style.pointerEvents` to clear (this is the wrong signal — pointer-events doesn't block `scrollIntoView` at all; the thing that actually blocks it is `body[data-scroll-locked]`, which sets `overflow: hidden` via `react-remove-scroll`, and it's released on the same animation-completion path, which can get stuck — e.g. under `prefers-reduced-motion`, or if the tab loses focus mid-transition — leaving the page permanently unscrollable even after the menu visually looks closed). The actual fix: `document.body.removeAttribute("data-scroll-locked")` synchronously in the click handler, then scroll immediately. This is safe to call unconditionally — Radix's own lock/unlock is a use-counter that no-ops once it's already at or below zero (see `react-remove-scroll-bar/dist/es2019/component.js`). See the current implementation in `navbar.tsx`'s `handleLinkClick` before changing this again.

Test this specifically after any nav/menu change: open the mobile menu on a narrow viewport and click every link — confirm the page actually scrolls, not just that the URL hash changes. Note for testing via browser automation specifically: if the tab being driven reports `document.hidden === true` (backgrounded/unfocused), `requestAnimationFrame` is paused by Chrome and `scrollIntoView({ behavior: "smooth" })` will silently never move the page even though the code is correct — verify with `history`/`location.hash` changes (synchronous, unaffected) rather than trusting `window.scrollY` in that situation, or force the tab to the foreground first.

**Never apply an infinite/looping `animate` transform directly to a transparent `<img>` — mobile Chrome will render it as an opaque black box.** This bit the work-gate signature image (`/hero-header.png` in `work-gate.tsx`) three separate times (see `CHANGELOG.md` entries from 2026-07-26) before the actual cause was found. It is NOT a CDN/image-format issue — confirmed by curling the production image with both Safari-mobile and Chrome-mobile `Accept` headers and getting byte-identical PNGs (same `etag`, same `content-type: image/png`) back from Cloudflare either way. It is NOT a fringing/downscale artifact either — forcing the image down to its real mobile render size (288px) in desktop Chrome showed no defect. The actual cause: a `repeat: Infinity` transform animation (e.g. Framer Motion's `animate={{ y: [0, -8, 0] }}`) applied straight to the `<img>` forces the browser to promote that element to its own persistent GPU compositor layer for as long as the animation runs. Some mobile Chrome/Blink versions initialize that layer's backing store as opaque black instead of transparent, so the PNG's alpha channel gets ignored — Safari/WebKit's compositor doesn't have this bug. Confirmed by comparing against the entrance animation on the same image in `hero.tsx`, which only animates once on mount and settles into a normal (non-composited) paint layer afterward, and never showed the bug.

Fix pattern: never animate the `<img>` itself. Wrap it in a `motion.div` (or plain `div` + CSS animation) and put the transform there; keep the `<img>` a static child with no `animate`/`transition` props of its own. If you need to test a rendering bug that only shows on real mobile Chrome and doesn't reproduce in desktop Chrome (even with viewport resize or forcing the element's CSS size down) or in Chrome DevTools device emulation, don't keep guessing blind — ask the user for a screenshot from the actual device, and if a dev server is running, have them hit its LAN address (e.g. `http://<local-ip>:3000`, printed in the `next dev` output as "Network:") directly from their phone to test a fix live before shipping.

# Brand

**Patent gradient** — the site's signature brand gradient (violet → fuchsia → orange). CSS var: `--gradient-signature` in `src/app/globals.css` (stops: `--grad-violet` `#8b5cf6`, `--grad-fuchsia` `#f0469b`, `--grad-orange` `#ff8a3d`). For SVG icons, reference the shared `<linearGradient id="patent-gradient">` rendered once via `PatentGradientDefs` (`src/components/site/patent-gradient-defs.tsx`) — apply with `fill="url(#patent-gradient)"` (brand marks) or `stroke="url(#patent-gradient)"` (outline icons like lucide). Used for: the "SW" avatar mark, the work-gate reveal flash, the About section glow, and social/brand icons.
