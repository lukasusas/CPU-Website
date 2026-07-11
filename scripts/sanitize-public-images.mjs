import { readdir } from "node:fs/promises";
import path from "node:path";
import { exiftool } from "exiftool-vendored";

const roots = ["public", "src/app"];
const rasterExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) return collectImages(file);
      return rasterExtensions.has(path.extname(entry.name).toLowerCase()) ? [file] : [];
    })
  );
  return nested.flat();
}

try {
  const images = (await Promise.all(roots.map(collectImages))).flat();
  await Promise.all(images.map((image) => exiftool.write(image, {}, ["-overwrite_original", "-all="])));
  console.log(`Sanitized metadata from ${images.length} public raster assets.`);
} finally {
  await exiftool.end();
}
