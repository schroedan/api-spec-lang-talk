#!/usr/bin/env node
const minimist = require('minimist');
const app = require('../app');

const argv = minimist(process.argv.slice(2), {
  alias: {
    p: ['port']
  },
  default: {
    p: 8000
  }
});

app().listen(argv.p, () => {
  console.log(`Started server on port ${argv.p}`);
});
