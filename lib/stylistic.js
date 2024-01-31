const indentSize = 2;

module.exports = {
  plugins: [
    '@stylistic'
  ],
  rules: {
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': 'error',
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style': ['error', 'stroustrup', {
      allowSingleLine: true
    }],
    '@stylistic/comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    '@stylistic/comma-spacing': ['error', {
      before: false,
      after: true
    }],
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
    '@stylistic/generator-star-spacing': ['error', {
      before: false,
      after: true
    }],
    '@stylistic/implicit-arrow-linebreak': 'off',
    '@stylistic/indent': ['error', indentSize, {
      VariableDeclarator: {
        'var': 2,
        'let': 2,
        'const': 3
      },
      SwitchCase: 1,
      ignoredNodes: [
        'TemplateLiteral'
      ]
    }],
    '@stylistic/indent-binary-ops': ['error', indentSize],
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/func-call-spacing': 'off',
    '@stylistic/jsx-child-element-spacing': 'off',
    '@stylistic/jsx-closing-bracket-location': 'off',
    '@stylistic/jsx-closing-tag-location': 'off',
    '@stylistic/jsx-curly-brace-presence': 'off',
    '@stylistic/jsx-curly-newline': 'off',
    '@stylistic/jsx-curly-spacing': 'off',
    '@stylistic/jsx-equals-spacing': 'off',
    '@stylistic/jsx-first-prop-new-line': 'off',
    '@stylistic/jsx-indent': 'off',
    '@stylistic/jsx-indent-props': 'off',
    '@stylistic/jsx-max-props-per-line': 'off',
    '@stylistic/jsx-newline': 'off',
    '@stylistic/jsx-one-expression-per-line': 'off',
    '@stylistic/jsx-props-no-multi-spaces': 'off',
    '@stylistic/jsx-self-closing-comp': 'off',
    '@stylistic/jsx-sort-props': 'off',
    '@stylistic/jsx-tag-spacing': 'off',
    '@stylistic/jsx-wrap-multilines': 'off',
    '@stylistic/key-spacing': ['error', {
      beforeColon: false
    }],
    '@stylistic/keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/lines-around-comment': ['error', {
      beforeBlockComment: true
    }],
    '@stylistic/lines-between-class-members': ['error', 'always'],
    '@stylistic/max-len': ['error', {
      code: 90,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignorePattern: '^(import|export)\\s.+\\sfrom\\s'
    }],
    '@stylistic/max-statements-per-line': ['error', {
      max: 2
    }],
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/multiline-ternary': 'off',
    '@stylistic/new-parens': ['error', 'always'],
    '@stylistic/newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2
    }],
    '@stylistic/no-confusing-arrow': ['error', {
      allowParens: true
    }],
    '@stylistic/no-extra-parens': ['error', 'all', {
      ignoreJSX: 'multi-line',
      nestedBinaryExpressions: false,
      ternaryOperandBinaryExpressions: false
    }],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1
    }],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': 'off',
    '@stylistic/object-curly-newline': ['error', {
      consistent: true
    }],
    '@stylistic/object-curly-spacing': ['error', 'never'],
    '@stylistic/object-property-newline': 'off',
    '@stylistic/one-var-declaration-per-line': 'off',
    '@stylistic/operator-linebreak': ['error', 'after'],
    '@stylistic/padded-blocks': 'off',
    '@stylistic/padding-line-between-statements': [
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
    '@stylistic/quote-props': ['error', 'consistent-as-needed', {
      keywords: true
    }],
    '@stylistic/quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-spacing': ['error', {
      before: false,
      after: true
    }],
    '@stylistic/semi-style': ['error', 'last'],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',
    '@stylistic/spaced-comment': ['error', 'always'],
    '@stylistic/switch-colon-spacing': ['error', {
      before: false,
      after: true
    }],
    '@stylistic/template-curly-spacing': ['error', 'never'],
    '@stylistic/template-tag-spacing': ['error', 'never'],
    '@stylistic/type-annotation-spacing': 'off',
    '@stylistic/type-generic-spacing': 'off',
    '@stylistic/type-named-tuple-spacing': 'off',
    '@stylistic/wrap-iife': ['error', 'inside'],
    '@stylistic/wrap-regex': 'error',
    '@stylistic/yield-star-spacing': ['error', 'before']
  }
};
