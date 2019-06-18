/**
 * import modules
 */
const validator = require('eslint/lib/config/config-validator');

/**
 * import modules (local)
 */
const base = require('../lib/base');

validator.validate(base, () => {}, 'lib/base.js');

console.log('ok'); // eslint-disable-line  no-console
