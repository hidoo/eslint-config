import baseConfig from './lib/base.js';
// import eslintCommentsConfig from './lib/eslint-comments.js';
// import importConfig from './lib/import.js';
import jsdocConfig from './lib/jsdoc.js';
import sortClassMembersConfig from './lib/sort-class-members.js';

/**
 * main config
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  baseConfig,
  // eslintCommentsConfig,
  // importConfig,
  jsdocConfig,
  sortClassMembersConfig
];
