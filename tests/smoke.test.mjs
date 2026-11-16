import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));

test('service worker caches all manifest icons and returns Response on offline failure', () => {
  new vm.Script(sw);
  for (const icon of manifest.icons) {
    assert.ok(sw.includes(icon.src), `Missing icon in ASSETS_TO_CACHE: ${icon.src}`);
  }
  assert.match(sw, /Response\.error\(\)/);
});

test('index.html defines --ok-soft, parses cleanly, and avoids dead prototype hooks', () => {
  const softMatches = html.match(/--ok-soft:/g) || [];
  assert.ok(softMatches.length >= 3, 'Expected --ok-soft in root and dark theme blocks');
  assert.doesNotMatch(html, /window\.claude\.use/);
  const scripts = [...html.matchAll(/<script(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length >= 1);
  for (const [, code] of scripts) {
    assert.doesNotThrow(() => new vm.Script(code));
  }
});
