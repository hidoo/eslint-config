# @hidoo/eslint-config

[![Test](https://github.com/hidoo/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/hidoo/eslint-config/actions/workflows/test.yml)

Shareable config for ESlint.

## Installation

```sh
npm install --save-dev eslint @hidoo/eslint-config
```

## Usage

### basic

```js
import configs from '@hidoo/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [...configs];
```

### with @babel/eslint-parser

```js
import configs from '@hidoo/eslint-config';
import babelConfig from '@hidoo/eslint-config/+babel';

/** @type {import('eslint').Linter.Config[]} */
export default [...configs, babelConfig];
```

### with ESLint Stylistic

```js
import configs from '@hidoo/eslint-config';
import stylisticConfig from '@hidoo/eslint-config/+stylistic';

/** @type {import('eslint').Linter.Config[]} */
export default [...configs, stylisticConfig];
```

### with Prettier

```js
import configs from '@hidoo/eslint-config';
import prettierConfig from '@hidoo/eslint-config/+prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [...configs, prettierConfig];
```

### with compatibility check

```js
import configs from '@hidoo/eslint-config';
import compatibilityConfig from '@hidoo/eslint-config/+compatibility';

/** @type {import('eslint').Linter.Config[]} */
export default [...configs, compatibilityConfig];
```

### for Mocha

```js
import configs from '@hidoo/eslint-config';
import mochaConfig from '@hidoo/eslint-config/+mocha';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...configs,
  {
    files: ['**/*.test.js'],
    ...mochaConfig
  }
];
```

### for Node

```js
import configs from '@hidoo/eslint-config';
import nodeConfig from '@hidoo/eslint-config/+node';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...configs,
  {
    files: ['**/*.test.js'],
    ...nodeConfig
  }
];
```

## Test

```sh
pnpm test
```

## License

MIT
