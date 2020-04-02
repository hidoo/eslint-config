const fs = require('fs');
const path = require('path');

// node/no-callback-literal
/* eslint-disable no-undef */
noCallbackLiteral((error, cb) => {
  if (error) {
    return cb(error);
  }
  return cb(null, 'aaaa');
});
/* eslint-enable no-undef */

// node/exports-style
module.exports.hoge = () => true;

// node/file-extension-in-import
// import * as fuga from 'fuga';

// node/prefer-global/buffer
// node/prefer-global/console
// node/prefer-global/process
// node/prefer-global/text-decoder
// node/prefer-global/text-encoder
// node/prefer-global/url-search-params
// node/prefer-global/url
/* eslint-disable no-new, node/no-unsupported-features/node-builtins */
Buffer.from();
console.log();
process.cwd();
new TextDecoder();
new TextEncoder();
new URLSearchParams();
new URL();
/* eslint-enable no-new, node/no-unsupported-features/node-builtins */

// node/callback-return
const callbackReturn = (error, callback) => {
  if (error) {
    return callback(error);
  }
  return callback();
};

// node/global-require
/* eslint-disable no-undef */
const globalRequire = DEBUG ? require('global-require') : null;
/* eslint-enable no-undef */

// node/handle-callback-err
const handleCallbackErr = (error, callback) => {
  if (error) {
    return callback(error);
  }
  return callback();
};

// node/no-mixed-requires
const noMixedRequires = require('no-mixed-requires');

const noMixedRequiresError = false;

// node/no-new-require
const NoNewRequire = require('no-new-require');

const noNewRequire = new NoNewRequire();

// node/no-path-concat
/* eslint-disable no-undef */
const noPathConcatDirname = path.join(__dirname, 'no-path-concat.js');
const noPathConcatFilename = path.join(__filename, 'no-path-concat.js');
const noPathConcatVar = `${dirname}/no-path-concat.js`;
/* eslint-enable no-undef */

// node/no-process-env
const noProcessEnv = true;

// node/no-process-exit
/* eslint-disable no-undef */
if (noProcessExit) {
  throw new Error();
}
/* eslint-enable no-undef */

// node/no-sync
fs.stat('/path/to/no-sync', (error, stats) => {
  if (error) {
    throw error;
  }
});
