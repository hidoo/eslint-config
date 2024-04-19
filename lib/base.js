import js from '@eslint/js';
import globals from 'globals';

/**
 * recommended config
 *
 * @type {import('eslint').ESLint.Plugin.ConfigData}
 */
const { recommended } = js.configs;

/**
 * base config
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export default {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    globals: {
      ...globals.browser,
      ...globals.commonjs,
      ...globals.es2021
    }
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error'
  },
  rules: {
    ...recommended.rules,

    'no-await-in-loop': 'error',
    'no-console': 'error',
    'no-dupe-else-if': 'error',
    'no-import-assign': 'error',
    'no-setter-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    complexity: [
      'error',
      {
        max: 20
      }
    ],
    'consistent-return': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': [
      'error',
      {
        capIsConstructor: false
      }
    ],
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true
      }
    ],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'prefer-named-capture-group': 'warn',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    radix: 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    yoda: 'error',
    strict: ['error', 'safe'],
    'init-declarations': 'error',
    'logical-assignment-operators': ['error', 'always'],
    'no-constant-binary-expression': 'error',
    'no-empty-static-block': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-unused-private-class-members': 'error',
    'prefer-object-has-own': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': [
      'error',
      {
        builtinGlobals: false
      }
    ],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true
      }
    ],
    'no-inner-declarations': 'error',
    'no-useless-assignment': 'off',

    // Stylistic Issues
    camelcase: [
      'error',
      {
        properties: 'always'
      }
    ],
    'capitalized-comments': 'off',
    'consistent-this': ['error', 'self'],
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true
      }
    ],
    'func-names': [
      'error',
      'as-needed',
      {
        generators: 'as-needed'
      }
    ],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    'id-denylist': 'off',
    'id-length': [
      'error',
      {
        min: 2
      }
    ],
    'id-match': 'off',
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: 'pragma'
      }
    ],
    'max-depth': [
      'error',
      {
        max: 4
      }
    ],
    'max-lines': [
      'warn',
      {
        max: 600,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': [
      'error',
      {
        max: 5
      }
    ],
    'max-params': [
      'error',
      {
        max: 3
      }
    ],
    'max-statements': [
      'error',
      {
        max: 15
      }
    ],
    'multiline-comment-style': 'off',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-loss-of-precision': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-object-constructor': 'error',
    'no-plusplus': 'error',
    'no-promise-executor-return': 'error',
    'no-restricted-syntax': 'error',
    'no-ternary': 'off',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': 'error',
    'one-var': 'off',
    'operator-assignment': 'off',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'unicode-bom': ['error', 'never'],

    // ECMAScript 6
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: true
      }
    ],
    'no-duplicate-imports': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        avoidExplicitReturnArrows: true
      }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': 'off',
    'symbol-description': 'error'
  }
};
