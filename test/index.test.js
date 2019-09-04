/* eslint max-len: 0, no-magic-numbers: 0 */

const validator = require('eslint/lib/shared/config-validator');
const config = require('../');

describe('@hidoo/eslint-config', () => {

  it('should not throw error if validate.', () => {
    validator.validate(config, 'lib/base.js');
  });

});
