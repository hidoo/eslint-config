const fs = require('fs');
const path = require('path');

// n/no-callback-literal
/* eslint-disable no-undef */
noCallbackLiteral((error, cb) => {
  if (error) {
    return cb(error);
  }
  return cb('aaaa');
});
/* eslint-enable no-undef */

// n/exports-style
exports.hoge = () => true;

// n/file-extension-in-import
// import * as fuga from 'fuga.js';

// n/prefer-global/buffer
// n/prefer-global/console
// n/prefer-global/process
// n/prefer-global/text-decoder
// n/prefer-global/text-encoder
// n/prefer-global/url-search-params
// n/prefer-global/url
/* eslint-disable no-unused-vars */
const {Buffer} = require('buffer'),
      console = require('console'),
      process = require('process'),
      {TextDecoder, TextEncoder} = require('util'),
      {URLSearchParams, URL} = require('url')
/* eslint-enable no-unused-vars */

// n/callback-return
const callbackReturn = (error, callback) => {
  if (error) {
    callback(error);
  }
  return callback();
};

// n/global-require
/* eslint-disable no-undef */
if (DEBUG) {
  const globalRequire = require('global-require');
}
/* eslint-enable no-undef */

// n/handle-callback-err
const handleCallbackErr = (error, callback) => {
  return callback();
};

// n/no-mixed-requires
const noMixedRequires = require('no-mixed-requires'),
      noMixedRequiresError = true;

// n/no-new-require
const noNewRequire = new require('no-new-require');

// n/no-path-concat
const noPathConcatDirname = __dirname + '/no-path-concat.js';
const noPathConcatFilename = __filename + '/no-path-concat.js';

// n/no-process-env
const noProcessEnv = process.env.NO_PROCESS_ENV === 'invalid';

// n/no-process-exit
/* eslint-disable no-undef, no-process-exit */
if (noProcessExit) {
  process.exit(1);
}
/* eslint-enable no-undef, no-process-exit */

// n/no-sync
fs.statSync('/path/to/no-sync');
