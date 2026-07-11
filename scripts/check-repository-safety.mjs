import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";

const trackedFiles = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean);
const restrictedPath = /(^|\/)(\.env(?:\..*)?|.*\.(?:pem|key|p12|pfx|sqlite|db|map))$/i;
const credentialPattern = /(?:gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|sk-[A-Za-z0-9]{20,}|VERCEL_TOKEN\s*[=:]\s*['"]?[A-Za-z0-9_-]{12,})/;
const failures = [];

for (const file of trackedFiles) {
  if (restrictedPath.test(file)) failures.push(`Restricted file tracked: ${file}`);

  let content;
  try {
    content = await readFile(file);
  } catch (error) {
    if (error?.code === "ENOENT") continue;
    throw error;
  }
  if (content.includes(0)) continue;
  if (credentialPattern.test(content.toString("utf8"))) failures.push(`Credential-like value found: ${file}`);
}

if (failures.length > 0) throw new Error(`Repository safety check failed.\n${failures.join("\n")}`);

console.log(`Verified ${trackedFiles.length} tracked files for restricted local files and credential-like values.`);
