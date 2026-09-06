import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const args = process.argv.slice(2);
const name = args[0];
const targetIndex = args.indexOf("--target");
const target = targetIndex >= 0 ? args[targetIndex + 1] : "web";
const targets = new Set(["web", "mobile", "desktop", "all"]);

if (!name || !targets.has(target)) {
  console.error("Bruk: node scripts/create-project.mjs <navn> --target web|mobile|desktop|all");
  process.exit(1);
}

if (!/^[a-z0-9][a-z0-9-]*$/.test(name)) {
  console.error("Prosjektnavnet må bruke små bokstaver, tall og bindestrek.");
  process.exit(1);
}

const root = resolve(name);
const files = {
  "README.md": `# ${name}\n\nOpprettet med Julian Project Framework.\n`,
  "VERSION": "0.1.0\n",
  "CHANGELOG.md": `# Endringslogg\n\n## [0.1.0] - ${new Date().toISOString().slice(0, 10)}\n\n- Prosjektet ble opprettet.\n`,
  "SECURITY.md": "# Sikkerhet\n\nIkke publiser hemmeligheter eller private brukerdata.\n",
  ".editorconfig": "root = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\ninsert_final_newline = true\nindent_style = space\nindent_size = 2\ntrim_trailing_whitespace = true\n",
  ".gitignore": "node_modules/\ndist/\nbuild/\n.env\n.env.*\n!.env.example\n*.log\n",
  "project.config.json": `${JSON.stringify({ name, displayName: name, target, version: "0.1.0", dataPolicy: "local-first", releaseNotifications: true, autoRefreshSeconds: 15 }, null, 2)}\n`,
  "docs/PROJECT_STANDARD.md": "# Prosjektstandard\n\nBruk pull requests, tester, SemVer og presise release-notater. main skal alltid være byggbar.\n"
};

const folders = target === "all" ? ["apps/web", "apps/mobile", "apps/desktop", "packages/shared", "tests"] : [`apps/${target}`, "packages/shared", "tests"];
for (const folder of folders) await mkdir(resolve(root, folder), { recursive: true });
for (const [path, content] of Object.entries(files)) {
  const full = resolve(root, path);
  await mkdir(resolve(full, ".."), { recursive: true });
  await writeFile(full, content, { flag: "wx" });
}

console.log(`Opprettet ${name} med måltypen ${target}.`);
