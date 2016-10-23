'use strict';

const child_process = require('child_process');
const semver = require('semver');
const test = require('tap').test;

test('CLI', t => {
  t.plan(1);
  child_process.exec('./cmd.js -v', (err, out) => {
    const version = semver.clean(out);
    t.ok(semver.satisfies(version, '4.x.x'), 'version is 4.x.x');
  });
});

test('API', t => {
  t.plan(2);
  t.doesNotThrow(() => {
    const npm = require('npm');
    t.equal(typeof npm.load, 'function');
  });
});
