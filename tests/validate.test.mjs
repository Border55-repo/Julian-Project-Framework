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
