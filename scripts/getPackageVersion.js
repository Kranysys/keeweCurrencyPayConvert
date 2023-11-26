/* eslint-disable no-console */
const { readFileSync } = require('fs');
const { join } = require('path');

let packagePath;

switch (process.argv.slice(2)[0]) {
  case 'frontend':
    packagePath = join(__dirname, '..', 'packages', 'frontend');
    break;
  case 'domain':
    packagePath = join(__dirname, '..', 'packages', 'domain');
    break;
  case 'lib':
    packagePath = join(__dirname, '..', 'packages', 'lib');
    break;
  case 'backend':
    packagePath = join(__dirname, '..', 'packages', 'backend');
    break;
  case 'repo':
  default:
    packagePath = join(__dirname, '..');
    break;
}

const { version } = JSON.parse(readFileSync(join(packagePath, 'package.json')));

console.log(version);
