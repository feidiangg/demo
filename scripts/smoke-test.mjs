import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "src/App.jsx",
  "src/main.jsx",
  "src/styles.css",
  "vite.config.js",
  "public/favicon.jpg",
  "src/assets/avatar.jpg",
  "src/assets/hero-platform.png"
];

for (const file of requiredFiles) {
  await access(file);
}

const app = await readFile("src/App.jsx", "utf8");
const styles = await readFile("src/styles.css", "utf8");
const viteConfig = await readFile("vite.config.js", "utf8");

if (!app.includes("沸点") || !app.includes("Boiling Point")) {
  throw new Error("App should include bilingual identity content");
}

if (!app.includes("setLanguage") || !app.includes("setActiveKey")) {
  throw new Error("App should include language and interaction state");
}

if (!viteConfig.includes('base: "/hey/"')) {
  throw new Error("Vite should be configured for the GitHub Pages /hey/ base path");
}

for (const forbidden of ["purple", "violet", "magenta"]) {
  if (styles.toLowerCase().includes(forbidden)) {
    throw new Error(`Styles should avoid ${forbidden}`);
  }
}

console.log("Smoke test passed");
