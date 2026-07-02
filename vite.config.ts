// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set only by the GitHub Pages workflow (.github/workflows/deploy.yml). GitHub Pages serves
// static files only (no Worker/Node runtime), so that build opts into nitro's "static" preset
// instead of the cloudflare-module default. Lovable's own sandbox/publish flow never sets this,
// so it keeps building for Cloudflare as before.
const isGithubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(isGithubPagesBuild
    ? {
        nitro: {
          preset: "static",
        },
      }
    : {}),
});
