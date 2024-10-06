const fs = require('fs');
const {resolve} = require("node:path");
require('dotenv').config({ path: resolve(__dirname, '.env') });

console.info('env_luki', process.env);

process.stdout.write('Hello from vite-test-library postinstall script!\n' + JSON.stringify(process.env));
console.log('This is a console.log message from vite-test-library postinstall script.');

fs.writeFileSync('./test.txt', JSON.stringify(process.env))
