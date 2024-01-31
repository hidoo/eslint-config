/* eslint no-unused-vars: off, max-classes-per-file: off */

// func-names
(() => true)();

// line-comment-position
// valid comment
(() => true)(); // eslint-***
// valid comment

// grouped-accessor-pairs
class GroupedAccessorPairs {
  get aaa() {
    return this.aaa;
  }

  set aaa(value) {
    this.aaa = value;
  }

  get hoge() {
    return this.hoge;
  }
}

// no-constructor-return
class NoConstructorReturn {
  constructor(value) {
    this.value = value;
  }
}

// no-dupe-else-if
(() => {
  const aa = true;

  if (aa) {
    return true;
  }
  return false;
})();

// no-setter-return
class NoSetterReturn {
  get aa() {
    return this.value;
  }

  set aa(value) {
    this.value = value;
  }
}

// prefer-exponentiation-operator
/* eslint-disable no-magic-numbers */
(() => {
  const result = 2 ** 2;
})();
/* eslint-enable no-magic-numbers */

// default-case-last
(() => {
  const defaultCaseLast = 'valid';

  switch (defaultCaseLast) {
    case 'valid':
      break;
    default:
      break;
  }
})();

// no-useless-backreference
const noUselessBackreference = /\1/;
