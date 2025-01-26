const cp = require('child_process');
const fs = require('fs');
const path = require('path');

// use the below command to see diff
// git diff --no-index dist/crc.js dist/crc-back.js
const distFilePath = 'dist/crc.js';
const backFilePath = 'dist/crc-back.js';

const originBabelConfigFilePath = path.resolve(__dirname, '../babel-origin.config.js');
const transformBabelCofigFilePath = path.resolve(__dirname, '../babel-transform.config.js');

function transform() {
  cp.execSync(`npx babel --config-file=${originBabelConfigFilePath} ${distFilePath} --out-file ${distFilePath}`);
  cp.execSync(`mv ${distFilePath} ${backFilePath}`);
  cp.execSync(`npx babel --config-file=${transformBabelCofigFilePath} ${backFilePath} --out-file ${distFilePath}`);
  let content = fs.readFileSync(distFilePath, 'utf-8');
  content = removeNodeVersionError(content);
  fs.writeFileSync(distFilePath, content, 'utf-8');

  function removeNodeVersionError(content) {
    return content.replace(/(throw new Error\('This emscripten-generated code requires node.*$)/m, '// $1');
  }
}

module.exports = transform;

if (require.main === module) {
  transform();
}
