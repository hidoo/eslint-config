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
