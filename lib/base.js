/* eslint quote-props: 0, no-magic-numbers: 0 */
module.exports = {
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'arrow-body-style': ['error',
      'as-needed'
    ],
    'arrow-parens': 'error',
    'arrow-spacing': ['error',
      {
        'before': true,
        'after': true
      }
    ],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error',
      'stroustrup',
      {
        'allowSingleLine': true
      }
    ],
    'camelcase': ['error',
      {
        'properties': 'always'
      }
    ],
    'comma-dangle': ['error',
      'never'
    ],
    'comma-spacing': ['error',
      {
        'before': false,
        'after': true
      }
    ],
    'comma-style': ['error',
      'last'
    ],
    'complexity': ['error',
      {
        'max': 20
      }
    ],
    'computed-property-spacing': 'error',
    'consistent-return': 'error',
    'consistent-this': ['error',
      'self'
    ],
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error',
      'property'
    ],
    'dot-notation': 'error',
    'eol-last': ['error',
      'always'
    ],
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'func-style': ['error',
      'declaration',
      {
        'allowArrowFunctions': true
      }
    ],
    'generator-star-spacing': ['error',
      {
        'before': false,
        'after': true
      }
    ],
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'indent': ['error',
      2,
      {
        'VariableDeclarator': {
          'var': 2,
          'let': 2,
          'const': 3
        },
        'SwitchCase': 1
      }
    ],
    'init-declarations': 'error',
    'jsx-quotes': ['error',
      'prefer-double'
    ],
    'key-spacing': ['error',
      {
        'beforeColon': false
      }
    ],
    'keyword-spacing': ['error',
      {
        'before': true,
        'after': true
      }
    ],
    'linebreak-style': ['error',
      'unix'
    ],
    'lines-around-comment': ['error',
      {
        'beforeBlockComment': true
      }
    ],
    'max-depth': ['error',
      {
        'max': 4
      }
    ],
    'max-len': ['error',
      {
        'code': 90,
        'ignoreComments': true
      }
    ],
    'max-nested-callbacks': ['error',
      {
        'max': 5
      }
    ],
    'max-params': ['error',
      {
        'max': 3
      }
    ],
    'max-statements': ['error',
      {
        'max': 15
      }
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-confusing-arrow': ['error',
      {
        'allowParens': true
      }
    ],
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error',
      {
        'ignoreArrayIndexes': true
      }
    ],
    'no-mixed-requires': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error',
      {
        'max': 2
      }
    ],
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-process-env': 'warn',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'warn',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': ['error',
      {
        'builtinGlobals': false
      }
    ],
    'no-shadow-restricted-names': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': ['error',
      {
        'functions': false,
        'classes': true
      }
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-var': 'warn',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'object-curly-spacing': 'error',
    'operator-linebreak': ['error',
      'after'
    ],
    'padding-line-between-statements': ['error',
      {
        'blankLine': 'always',
        'prev': 'directive',
        'next': '*'
      },
      {
        'blankLine': 'any',
        'prev': 'directive',
        'next': 'directive'
      },
      {
        'blankLine': 'always',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': '*'
      },
      {
        'blankLine': 'any',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': [
          'const',
          'let',
          'var'
        ]
      }
    ],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error',
      'as-needed'
    ],
    'quotes': ['error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'radix': 'error',
    'require-jsdoc': 'error',
    'semi': 'error',
    'semi-spacing': ['error',
      {
        'before': false,
        'after': true
      }
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'strict': ['error',
      'safe'
    ],
    'valid-jsdoc': ['error',
      {
        'requireReturnDescription': false
      }
    ],
    'vars-on-top': 'error',
    'wrap-iife': ['error',
      'inside'
    ],
    'wrap-regex': 'error',
    'yoda': 'error'
  }
};
