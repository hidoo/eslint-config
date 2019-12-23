# @hidoo/eslint-config

[![Status](https://github.com/hidoo/eslint-config/workflows/Main%20workflow/badge.svg)](https://github.com/hidoo/eslint-config/actions?query=branch%3Amaster)

Sharable eslint config for my projects.

## Installation

```sh
$ npm install --save-dev eslint @hidoo/eslint-config
```

## Usage

### basic

```js
module.exports = {
  'extends': [
    '@hidoo/eslint-config'
  ]
};
```

### with babel-eslint

```js
module.exports = {
  'extends': [
    '@hidoo/eslint-config',
    '@hidoo/eslint-config/+babel'
  ]
};
```

### for Mocha

```js
module.exports = {
  'extends': [
    '@hidoo/eslint-config'
  ],
  'overrides': [
    {
      'files': ['**/*.test.js'],
      'extends': ['@hidoo/eslint-config/+mocha']
    }
  ]
};
```

### for Node

```js
module.exports = {
  'extends': [
    '@hidoo/eslint-config'
  ],
  'overrides': [
    {
      'files': ['path/to/**/*.js'],
      'extends': ['@hidoo/eslint-config/+node']
    }
  ]
};
```

## Test

```sh
$ yarn test
```

## License

MIT
