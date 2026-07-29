# Changelog

Notable changes to seankwatkins.com, most recent first. Updated on every ship.

## 2026-07-29 (3)

- Fixed a bug in the screenshot lightbox where a screenshot could open pushed down toward the bottom of the screen instead of centered — happened after swiping down to dismiss a previous screenshot, which left it primed to throw off the next one's position.
- Fixed the lightbox's prev/next arrows sometimes skipping past a screenshot instead of stepping to the very next one.

## 2026-07-29 (2)

- Added pinch-to-zoom and double-tap-to-zoom to the screenshot lightbox, so screenshots that read small on a phone can actually be zoomed in and panned around instead of staying stuck at their small on-screen size. Swiping down to dismiss still works exactly as before when not zoomed in.

## 2026-07-29

- Added a premium lightbox for case study screenshots: click or tap any screen (or the process/mural diagram) inside a case study to bring it up full-screen with smooth open/close animation, swipe-to-dismiss on mobile, and gradient-styled navigation controls that match the site's brand look. Works consistently across every case study, including the Chattic app screens.
- Added a visible "expand" badge on every screenshot so it's clear at a glance that it can be tapped to enlarge, on both desktop and mobile.
- Fixed the lightbox's close button needing two clicks to actually close — it inherited a "clicks do nothing" style from the case study modal underneath while that modal was open, so the very first click silently did nothing.

## 2026-07-28 (2)

- Added six new Kroger case studies, each with real product screens and its own custom banner mark:
  - **Upmost Pricing** — a review workflow for higher-cadence competitive price checks.
  - **Competitive Distance Dashboard** — drive-time thresholds and a network map for defining a defensible competitor set.
  - **Figma training** — a hands-on session teaching the team a plugin-based table-building workflow.
  - **AI Guild** — the biweekly guild I lead to help designers get comfortable using AI in their actual work.
  - **DPM (Digital Project Manager)** — an internal project-management and team-capacity tool I built that's now rolling out org-wide.
  - **FreshPrompt** — an internal workspace for designers to prompt, code, and preview live with Claude.
- Redesigned the small "K" mark that appears on every Kroger card — now a custom calligraphic glyph, white, consistently sized and positioned across all seven Kroger projects, with a soft shadow so it stays legible over any background.
- Fixed a layout bug where a case study modal's title could render hidden behind its own cover banner for any project without a real logo image (affected the flagship Kroger case study and any newly added one) — the modal was using a CSS Grid layout that could collapse a row to zero height in that scenario; switched to a more reliable layout.
- Fixed mobile/anchor navigation landing section headers flush under the fixed nav bar instead of clear of it.
- Blurred coworkers' names in a case study screenshot to protect their privacy.

## 2026-07-28

- Rebuilt three case study modals with real product work instead of placeholder graphics:
  - **Climate Pros** — added real WatchTower dashboard and reports screenshots, the WatchTower logo, and the original intelligence-mapping flowchart.
  - **The Web and Marketing Bureau** — refocused on the Chattic app project, with real app screens, the Chattic logo, and the original application flowchart.
  - **Belcan** — refocused on the GE Digital Cockpit dashboard, with a before/after look at a color-coded redesign of the shop-floor status cards, and a GE logo watermark.
- Rewrote the copy on all three to lead with concrete outcomes and real numbers instead of generic bullet points.
- Fixed a bug where adding a wide image (like a flowchart) to a case study modal could push the whole modal off-screen.
- Fixed the "quick stat" callout on project cards (e.g. "25+ production stations tracked live") sometimes landing left-aligned instead of lining up on the right like the others.
- Added more breathing room throughout the case study modals so content doesn't crowd the header image.

## 2026-07-26 (7)

- Updated the downloadable resume to the latest version.
- Fixed the black box behind the signature for real this time — it was only ever showing up on Chrome on phones. The image itself was fine (genuine transparency, confirmed identical bytes served to every browser); the real cause was the signature's floating bounce animation being applied directly to the image, which pins it to its own persistent hardware layer that some mobile Chrome versions render with an opaque black backing instead of a transparent one. Moved the animation onto a wrapper around the image instead, so the image itself is never directly animated.

## 2026-07-26 (6)

- Added the "SKW" brand mark to the footer, sitting just below the Elsewhere section with its own divider line above the copyright row. Colored in the site's signature gradient, with a subtle fade-in on scroll, and sized to stay modest on mobile.

## 2026-07-26 (5)

- Fixed the mobile menu links again — they'd quietly stopped scrolling to their section. The previous fix waited for the wrong signal to know the menu had finished closing; it now clears the actual thing blocking the scroll directly, so it doesn't depend on an animation finishing at all (which is what let it get stuck in the first place).

## 2026-07-26 (4)

- Properly fixed the black box behind the signature (still showed up on mobile after the earlier attempt). The signature image never had real transparency — it was faking it with a CSS blend-mode trick, which is fragile and renders inconsistently across browsers. Rebuilt the image with genuine transparency (same resolution, no quality loss) so it now displays correctly everywhere, no browser-specific tricks involved.

## 2026-07-26 (3)

- Fixed the password-gate signature: a leftover black box was showing behind it on the gradient background (the floating bounce animation was breaking the image's blend-with-background effect). Signature now blends cleanly into the gradient at full resolution, same as before.

## 2026-07-26 (2)

- Mobile menu polish pass: removed the visible "Menu" label, fixed a duplicate close button (the panel's own close X was rendering underneath the animated hamburger/X), and fixed the panel actually covering the header instead of sliding in below it.
- Mobile menu now does a full right-to-left slide instead of a small nudge.
- Replaced the mobile nav's scroll-after-close logic with one that waits for the real signal that the menu has finished closing, instead of guessing a fixed delay — the guess was itself an occasional source of "the link didn't scroll" bugs.
- Removed a stray focus-ring outline that became visible around the mobile menu panel.

## 2026-07-26

- Fixed the mobile menu: links now actually scroll to their section instead of silently doing nothing (a Radix dialog/scroll-lock timing bug — documented in `AGENTS.md` so it doesn't come back).
- Mobile menu hamburger now morphs into an X with a gradient animation, stays visible the whole time the menu is open, and acts as the single close control.
- Mobile menu background reverted to plain black, with a gradient accent bar next to whichever link you're hovering.
- Fixed the desktop nav links appearing off-center (the logo and "Let's talk" button are different widths, which broke simple centering — now uses a layout immune to that).
- Added a thin patent-gradient border to card-style elements site-wide (skills cards, testimonials, pillar cards, case studies and their tags, the process step grid), dialed down to a faint tint rather than a bright ring. Left it as a plain grey border on elements that already have their own gradient glow (the contact card, the password gate, the process section's outer frame) to avoid overloading them with color.
- Added a gradient "W" favicon.
- The "AI" and bullets in the "Design • AI • Innovate" tagline now render in the gradient instead of flat red.
- Removed the border around the About section graphic — it now floats against the background with just the ambient glow framing it.

## 2026-07-25

- Started keeping this changelog — every ship from now on gets a dated entry here.

## 2026-07-25

- Framed the "How I work" process section in the patent gradient (violet → fuchsia → orange) so it pops against the black sections above and below it, while keeping each step card on a solid background for readability.
- Added a "Toolkit" label above the scrolling tools marquee in the About section.
- Swapped in the final About section graphic (text-free, warm-vignette version).
- Fixed a false-positive hydration warning in dev mode caused by browser extensions injecting attributes into the page.

## 2026-07-25

- Added an "Elsewhere" section before the footer with LinkedIn, Email, and Resume links — icons rendered in the patent gradient, with a gradient-ring glow on hover.
- Fixed the password gate's signature graphic showing a black box behind it on mobile Safari (mix-blend-mode + transform stacking-context bug).
- Rebuilt the "Design · AI · Innovate" tagline as real, readable HTML text instead of tiny baked-in image text; fixed the low-contrast red on "AI".
- Added a graphic next to the About section text, framed with a patent-gradient glow.
- Updated the LinkedIn profile URL.
- Removed the "Open to new roles" hero pill and "open to remote" from the tagline (parked, not deleted — see project memory).
- Softened the contact section headline from "Hiring a senior product designer?" to "Solving a hard problem? I'd love to help."
- Documented the "patent gradient" convention and the "ship it" deploy trigger in `AGENTS.md`.
