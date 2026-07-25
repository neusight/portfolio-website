<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deploy workflow

Never chain build → deploy → push automatically after a change. For every change (content or code):

1. Edit
2. Run `npm run dev` (or reuse the already-running dev server) and verify on localhost — desktop and mobile
3. Show/describe the change to the user and wait for explicit go-ahead
4. Only then: `npm run build`, `wrangler pages deploy out --project-name portfolio-website --branch main`, and `git commit` / `git push`

This applies to every change going forward, not just first-time setup.
