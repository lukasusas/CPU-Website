import { readdir } from "node:fs/promises";
import path from "node:path";
import { exiftool } from "exiftool-vendored";

const roots = ["public", "src/app"];
const rasterExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const restrictedTag = /^(GPS|EXIF|XMP|IPTC|MakerNotes|QuickTime|ICC_Profile)/i;

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
  const failures = [];

  for (const image of images) {
    const tags = await exiftool.readRaw(image, { readArgs: [] });
    const sensitiveTags = Object.keys(tags).filter((tag) => tag !== "ExifToolVersion" && restrictedTag.test(tag));
    if (sensitiveTags.length > 0) failures.push(`${image}: ${sensitiveTags.join(", ")}`);
  }

  if (failures.length > 0) {
    throw new Error(`Public image metadata check failed.\n${failures.join("\n")}`);
  }

  console.log(`Verified ${images.length} public raster assets without EXIF/XMP/IPTC/GPS metadata.`);
} finally {
  await exiftool.end();
}
