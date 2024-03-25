const fs = require('fs');
const path = require('path');

// n/no-callback-literal
noCallbackLiteral((error, cb) => {
  if (error) {
    return cb(error);
  }
  return cb(null, 'aaaa');
});

// n/exports-style
module.exports.hoge = () => true;

// n/file-extension-in-import
// import * as fuga from 'fuga';

// n/prefer-global/buffer
// n/prefer-global/console
// n/prefer-global/process
// n/prefer-global/text-decoder
// n/prefer-global/text-encoder
// n/prefer-global/url-search-params
// n/prefer-global/url
/* eslint-disable no-new */
Buffer.from();
console.log();
process.cwd();
new TextDecoder();
new TextEncoder();
new URLSearchParams();
new URL();
/* eslint-enable no-new */

// n/callback-return
const callbackReturn = (error, callback) => {
  if (error) {
    return callback(error);
  }
  return callback();
};

// n/global-require
const globalRequire = DEBUG ? require('global-require') : null;

// n/handle-callback-err
const handleCallbackErr = (error, callback) => {
  if (error) {
    return callback(error);
  }
  return callback();
};

// n/no-mixed-requires
const noMixedRequires = require('no-mixed-requires');

const noMixedRequiresError = false;

// n/no-new-require
const NoNewRequire = require('no-new-require');

const noNewRequire = new NoNewRequire();

// n/no-path-concat
const noPathConcatDirname = path.join(__dirname, 'no-path-concat.js');
const noPathConcatFilename = path.join(__filename, 'no-path-concat.js');
const noPathConcatVar = `${dirname}/no-path-concat.js`;

// n/no-process-env
const noProcessEnv = true;

// n/no-process-exit
if (noProcessExit) {
  throw new Error();
}

// n/no-sync
fs.stat('/path/to/no-sync', (error, stats) => {
  if (error) {
    throw error;
  }
});
