#!/usr/bin/env node
'use strict';

var child_process = require('child_process')
var npm = require.resolve('npm/cli');

child_process.spawn(
  process.execPath,
  [npm].concat(process.argv.slice(2)),
  {stdio: 'inherit'}
);
