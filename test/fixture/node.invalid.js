const fs = require('fs');
const path = require('path');

// node/no-callback-literal
/* eslint-disable no-undef */
noCallbackLiteral((error, cb) => {
  if (error) {
    return cb(error);
  }
  return cb('aaaa');
});
/* eslint-enable no-undef */

// node/exports-style
exports.hoge = () => true;

// node/file-extension-in-import
// import * as fuga from 'fuga.js';

// node/prefer-global/buffer
// node/prefer-global/console
// node/prefer-global/process
// node/prefer-global/text-decoder
// node/prefer-global/text-encoder
// node/prefer-global/url-search-params
// node/prefer-global/url
/* eslint-disable no-unused-vars */
const {Buffer} = require('buffer'),
      console = require('console'),
      process = require('process'),
      {TextDecoder, TextEncoder} = require('util'),
      {URLSearchParams, URL} = require('url')
/* eslint-enable no-unused-vars */

// node/callback-return
const callbackReturn = (error, callback) => {
  if (error) {
    callback(error);
  }
  return callback();
};

// node/global-require
/* eslint-disable no-undef */
if (DEBUG) {
  const globalRequire = require('global-require');
}
/* eslint-enable no-undef */

// node/handle-callback-err
const handleCallbackErr = (error, callback) => {
  return callback();
};

// node/no-mixed-requires
const noMixedRequires = require('no-mixed-requires'),
      noMixedRequiresError = true;

// node/no-new-require
const noNewRequire = new require('no-new-require');

// node/no-path-concat
const noPathConcatDirname = __dirname + '/no-path-concat.js';
const noPathConcatFilename = __filename + '/no-path-concat.js';

// node/no-process-env
const noProcessEnv = process.env.NO_PROCESS_ENV === 'invalid';

// node/no-process-exit
/* eslint-disable no-undef, no-process-exit */
if (noProcessExit) {
  process.exit(1);
}
/* eslint-enable no-undef, no-process-exit */

// node/no-sync
fs.statSync('/path/to/no-sync');
