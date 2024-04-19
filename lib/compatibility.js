import compatPlugin from 'eslint-plugin-compat';
import globals from 'globals';

/**
 * recommended config
 *
 * @type {import('eslint').ESLint.Plugin.ConfigData}
 */
const { recommended } = compatPlugin.configs;

/**
 * config for compatibility
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export default {
  languageOptions: {
    globals: {
      ...globals.browser
    }
  },
  plugins: {
    compat: compatPlugin
  },
  rules: {
    ...recommended.rules,
    'compat/compat': 'warn'
  }
};
