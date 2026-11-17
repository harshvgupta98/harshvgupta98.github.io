// Renders scripts/og-image/og-card.html to public/og-image.png (1200x630) with headless Chrome.
// Usage: npm run og:image   (set CHROME_PATH if Chrome isn't found automatically)
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const template = resolve(here, "og-card.html");
const output = resolve(here, "../../public/og-image.png");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  process.env.LOCALAPPDATA && `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error("Chrome not found. Set CHROME_PATH to your Chrome/Chromium executable.");
  process.exit(1);
}

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--allow-file-access-from-files",
  "--virtual-time-budget=4000",
  "--window-size=1200,630",
  `--screenshot=${output}`,
  pathToFileURL(template).href,
]);

console.log(`Wrote ${output} (${Math.round(statSync(output).size / 1024)} KB)`);
