import { access, readFile } from "node:fs/promises";

const required = ["README.md", "VERSION", "CHANGELOG.md", "FRAMEWORK.md", "SECURITY.md", "package.json", "docs/projects.json"];
const missing = [];

for (const path of required) {
  try { await access(path); } catch { missing.push(path); }
}

if (missing.length) {
  console.error(`Mangler påkrevde filer: ${missing.join(", ")}`);
  process.exit(1);
}

const version = (await readFile("VERSION", "utf8")).trim();
if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error("VERSION må følge SemVer, for eksempel 1.2.3.");
  process.exit(1);
}

const pkg = JSON.parse(await readFile("package.json", "utf8"));
if (pkg.version !== version) {
  console.error(`Ulik versjon: VERSION=${version}, package.json=${pkg.version}`);
  process.exit(1);
}

const changelog = await readFile("CHANGELOG.md", "utf8");
if (!changelog.includes(`[${version}]`)) {
  console.error(`CHANGELOG.md mangler versjon ${version}.`);
  process.exit(1);
}

const registry = JSON.parse(await readFile("docs/projects.json", "utf8"));
if (registry.schemaVersion !== 2 || !Array.isArray(registry.projects) || registry.projects.length === 0) {
  console.error("docs/projects.json må bruke registerskjema 2 og inneholde prosjekter.");
  process.exit(1);
}
const ids = new Set();
for (const project of registry.projects) {
  if (!project.id || ids.has(project.id)) throw new Error("Prosjekt-ID-er må være unike.");
  ids.add(project.id);
  if (!project.name || !project.category || !project.automationPolicy) throw new Error(`Ufullstendig prosjektdefinisjon: ${project.id}`);
  for (const key of ["repository", "site", "statusUrl"]) {
    if (project[key] && !String(project[key]).startsWith("https://")) throw new Error(`${project.id} har ugyldig ${key}.`);
  }
}

console.log(`Prosjektstandard godkjent for versjon ${version} med ${registry.projects.length} offentlige prosjekter.`);
