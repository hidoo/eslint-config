# @hidoo/eslint-config

[![Build Status](https://travis-ci.org/hidoo/eslint-config.svg?branch=master)](https://travis-ci.org/hidoo/eslint-config) [![Greenkeeper badge](https://badges.greenkeeper.io/hidoo/eslint-config.svg)](https://greenkeeper.io/)

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
$ npm test
```

## License

MIT
