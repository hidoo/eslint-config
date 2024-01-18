module.exports = {
  'extends': [
    'eslint:recommended'
  ],
  'env': {
    browser: true,
    commonjs: true,
    es6: true
  },
  'parserOptions': {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  'rules': {
    // Possible Errors
    'no-await-in-loop': 'error',
    'no-console': 'error',
    'no-dupe-else-if': 'error',
    'no-extra-parens': ['error', 'all', {
      ignoreJSX: 'multi-line'
    }],
    'no-import-assign': 'error',
    'no-setter-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off',

    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': ['error', {
      max: 20
    }],
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': 'error',
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
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': ['error', {
      capIsConstructor: false
    }],
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
      ignoreArrayIndexes: true
    }],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
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
    'radix': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    'yoda': 'error',

    // Strict Mode
    'strict': ['error', 'safe'],

    // Variables
    'init-declarations': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': ['error', {
      builtinGlobals: false
    }],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': ['error', {
      functions: false,
      classes: true
    }],

    // Stylistic Issues
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', {
      allowSingleLine: true
    }],
    'camelcase': ['error', {
      properties: 'always'
    }],
    'capitalized-comments': 'off',
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error', 'always', {
      considerPropertyDescriptor: true
    }],
    'func-names': ['error', 'as-needed', {
      generators: 'as-needed'
    }],
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true
    }],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'id-denylist': 'off',
    'id-length': ['error', {
      min: 2
    }],
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    // eslint-disable-next-line no-magic-numbers
    'indent': ['error', 2, {
      VariableDeclarator: {
        'var': 2,
        'let': 2,
        'const': 3
      },
      SwitchCase: 1
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
      beforeColon: false
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    'line-comment-position': ['error', {
      position: 'above',
      ignorePattern: 'pragma'
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      beforeBlockComment: true
    }],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', {
      max: 4
    }],
    'max-len': ['error', {
      code: 90,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true
    }],
    'max-lines': ['warn', {
      max: 600,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-lines-per-function': ['error', {
      max: 100,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-nested-callbacks': ['error', {
      max: 5
    }],
    'max-params': ['error', {
      max: 3
    }],
    'max-statements': ['error', {
      max: 15
    }],
    'max-statements-per-line': ['error', {
      max: 2
    }],
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'error',
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2
    }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-loss-of-precision': 'error',
    'no-mixed-operators': 'off',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-plusplus': 'error',
    'no-promise-executor-return': 'error',
    'no-restricted-syntax': 'error',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': ['error', {
      consistent: true
    }],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive'
      },
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var'
        ],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var'
        ],
        next: [
          'const',
          'let',
          'var'
        ]
      }
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'off',
    'quote-props': ['error', 'consistent-as-needed', {
      keywords: true
    }],
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': ['error', {
      before: false,
      after: true
    }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'error',

    // ECMAScript 6
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: true
    }],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'generator-star-spacing': ['error', {
      before: false,
      after: true
    }],
    'no-confusing-arrow': ['error', {
      allowParens: true
    }],
    'no-duplicate-imports': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always', {
      avoidQuotes: true,
      avoidExplicitReturnArrows: true
    }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'before']
  }
};
