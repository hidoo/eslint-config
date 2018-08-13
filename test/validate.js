/**
 * import modules
 */
const validator = require('eslint/lib/config/config-validator');

/**
 * import modules (local)
 */
const base = require('../lib/base');

try {
  validator.validate(base, 'lib/base.js', () => {});
}
catch (error) {
  console.error(error); // eslint-disable-line  no-console
}

console.log('ok'); // eslint-disable-line  no-console
