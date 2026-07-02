## Plan: Match About Section Style + Tighten Skills Grid + Add Azure

### 1. Refactor About Section to match Jayantha's formatting
- Move the heading into the card as **"💡 About Me"** (bold, top of card) like the reference.
- Rewrite the hobbies block as a proper bulleted list using **"•"** bullets with emoji prefixes, each on its own line.
- Ensure all paragraphs are left-aligned with consistent `font-mono text-[13px]` spacing.
- Keep all existing bio content unchanged.

### 2. Tighten Skills grid to 4 boxes per row
- Change grid classes from `grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6` to `grid-cols-2 sm:grid-cols-3 md:grid-cols-4`.
- Slightly increase `gap-2` to `gap-3` so the fewer columns still fill space nicely.

### 3. Add Azure to Skills
- Insert `{ name: "Azure", slug: "azure" }` into the `SKILLS` array (uses Simple Icons CDN, grayscale like other slug-based logos).

### 4. Verify build
- Run `bun run build` or `bunx tsc --noEmit` to confirm no type errors after edits.

No new dependencies or assets needed.