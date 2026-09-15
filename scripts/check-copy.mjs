import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const roots = ["app", "components", "lib"];
const extensions = new Set([".ts", ".tsx", ".css", ".md"]);
const forbidden = [String.fromCodePoint(0x2014), String.fromCodePoint(0x2013)];
const findings = [];

function visit(path) {
  if (path.startsWith(join("app", "v2"))) return;
  const entry = statSync(path);
  if (entry.isDirectory()) {
    readdirSync(path).forEach((child) => visit(join(path, child)));
    return;
  }
  if (!extensions.has(path.slice(path.lastIndexOf(".")))) return;
  const contents = readFileSync(path, "utf8");
  if (forbidden.some((character) => contents.includes(character))) findings.push(relative(process.cwd(), path));
}

roots.forEach(visit);

if (findings.length) {
  console.error(`Forbidden dash punctuation found in: ${findings.join(", ")}`);
  process.exit(1);
}

console.log("Copy check passed: no em dashes or en dashes in the active site.");
