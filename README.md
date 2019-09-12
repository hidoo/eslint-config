# @hidoo/eslint-config

[![Build Status](https://travis-ci.com/hidoo/eslint-config.svg?branch=master)](https://travis-ci.com/hidoo/eslint-config)

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
