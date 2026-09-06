import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("VERSION er gyldig SemVer", async () => {
  const version = (await readFile("VERSION", "utf8")).trim();
  assert.match(version, /^\d+\.\d+\.\d+$/);
});

test("pakkens versjon samsvarer med VERSION", async () => {
  const version = (await readFile("VERSION", "utf8")).trim();
  const pkg = JSON.parse(await readFile("package.json", "utf8"));
  assert.equal(pkg.version, version);
});

test("prosjektregisteret har unike ID-er og automatiseringspolicy", async () => {
  const registry = JSON.parse(await readFile("docs/projects.json", "utf8"));
  assert.equal(registry.schemaVersion, 2);
  assert.equal(new Set(registry.projects.map((project) => project.id)).size, registry.projects.length);
  registry.projects.forEach((project) => {
    assert.ok(project.category);
    assert.ok(project.automationPolicy);
    assert.match(project.repository, /^https:\/\/github\.com\//);
  });
});
