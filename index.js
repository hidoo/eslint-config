import baseConfig from './lib/base.js';
import importConfig from './lib/import.js';
import jsdocConfig from './lib/jsdoc.js';
import sortClassMembersConfig from './lib/sort-class-members.js';

// export globals
export { default as globals } from 'globals';

/**
 * main config
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [baseConfig, importConfig, jsdocConfig, sortClassMembersConfig];
