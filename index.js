import baseConfig from './lib/base.js';
import importConfig from './lib/import.js';
import jsdocConfig from './lib/jsdoc.js';
import sortClassMembersConfig from './lib/sort-class-members.js';

/**
 * main config
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [baseConfig, importConfig, jsdocConfig, sortClassMembersConfig];
