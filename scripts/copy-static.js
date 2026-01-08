const fs = require("fs");
const path = require("path");

const root = process.cwd();
const dist = path.join(root, "dist");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  ensureDir(destDir);
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      copyFile(srcPath, destPath);
    }
  }
}

// copy index.html
const indexSrc = path.join(root, "index.html");
const indexDest = path.join(dist, "index.html");
if (fs.existsSync(indexSrc)) {
  copyFile(indexSrc, indexDest);
  console.log("copied index.html");
} else {
  console.warn("index.html not found at root");
}

// copy image folder
copyDir(path.join(root, "image"), path.join(dist, "image"));
console.log("copied image/");

// copy src/styles so index.html can load CSS at src/styles/app.css
copyDir(path.join(root, "src", "styles"), path.join(dist, "src", "styles"));
console.log("copied src/styles/");

console.log("static copy complete");
