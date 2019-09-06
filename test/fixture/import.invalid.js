const noAbsolutePath = require('/path/to/hoge'),
      noDynamicRequire = require('./path' + '/to/fuga'), // eslint-disable-line no-useless-concat
      noWebpackLoaderSyntax = require('loader!./my-module'),
      noSelfImport = require('./import.invalid');

export let noMutableExports = true; // eslint-disable-line prefer-const

require(['noAmd'], (noAmd) => true); // eslint-disable-line import/no-dynamic-require

import first from './path/to/first'; // eslint-disable-line import/no-unresolved
import noUselessPathSegments from './/import.invalid'; // eslint-disable-line import/first, import/no-self-import
const newlineAfterImport = true;

export default [];


