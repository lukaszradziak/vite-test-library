#!/usr/bin/env node

const fs = require("node:fs");
console.log('LUKI CLI', process.env.CLIENT);

console.log(fs.readdirSync('./'));
