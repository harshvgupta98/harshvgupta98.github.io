// Runs the static build for GitHub Pages (see GITHUB_PAGES_BUILD in vite.config.ts).
//
// Nitro's "static" preset (nitro@3.0.260610-beta) prerenders every route to plain HTML
// correctly, but then crashes in a separate post-prerender packaging step that isn't needed
// for a static deploy (rolldownOptions.input should not be an html file when building for SSR).
// That crash happens after .output/public is fully written, so we tolerate it here and only
// fail the build if the prerendered output is actually missing.
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const publicDir = join(process.cwd(), ".output", "public");
const indexHtml = join(publicDir, "index.html");

const result = spawnSync("npx vite build", {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, GITHUB_PAGES_BUILD: "true" },
});

if (!existsSync(indexHtml)) {
  console.error("Static build failed: .output/public/index.html was not generated.");
  process.exit(result.status ?? 1);
}

if (result.status !== 0) {
  console.warn(
    "vite build exited non-zero after prerendering completed (known nitro static-preset " +
      "packaging bug) — continuing since .output/public/index.html was generated.",
  );
}

// GitHub Pages 404s on unknown paths by default; serving the SPA shell lets TanStack Router's
// client-side notFoundComponent handle them instead.
copyFileSync(indexHtml, join(publicDir, "404.html"));

// Tell GitHub Pages not to run Jekyll processing over the output.
writeFileSync(join(publicDir, ".nojekyll"), "");
