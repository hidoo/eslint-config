import sortClassMembersPlugin from 'eslint-plugin-sort-class-members';

/**
 * recommended config
 *
 * @type {import('eslint').ESLint.Plugin.ConfigData}
 */
const recommended = sortClassMembersPlugin.configs['flat/recommended'];

/**
 * config for sort-class-members
 *
 * @type {import('eslint').Linter.Config}
 */
export default recommended;
