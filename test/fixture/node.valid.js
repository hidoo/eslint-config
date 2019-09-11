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
