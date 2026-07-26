# Changelog

Notable changes to seankwatkins.com, most recent first. Updated on every ship.

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
