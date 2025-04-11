/* eslint max-classes-per-file: 0, no-unused-vars: off */

// func-names
(function() { return true; })();

// function-paren-newline
function functionParenNewlineA(arg1,
  arg2,
  arg3
) {
  return true ;
}

function functionParenNewlineB(arg1, arg2,
  arg3
) {
  return true;
}

// lines-between-class-members
class LinesBetweenClassMembers {
  memberA() {
    return this;
  }
  memberB() {
    return this;
  }
  memberC() { return this; }
}

// newline-per-chained-call
/* eslint-disable no-undef */
(() => {
  newlinePerChainedCall.mathodA().methodB().methodC();
})();
/* eslint-enable no-undef */

// object-curly-newline
(() => {
  const objectCurlyNewlineA = {propA: {},
          propB: {},
          propC: {}
        },
        objectCurlyNewlineB = {
          propA: {},
          propB: {},
          propC: {}};
})();

// grouped-accessor-pairs
class GroupedAccessorPairs {
  get aaa() {
    return this.aaa;
  }

  get hoge() {
    return this.hoge;
  }

  set aaa(value) {
    this.aaa = value;
  }
}

// no-constructor-return
class NoConstructorReturn {
  constructor(value) {
    this.value = value;
    return true;
  }
}

// no-dupe-else-if
(() => {
  const aa = true;

  if (aa) {
    return true;
  }
  else if (aa) {
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
    return value;
  }
}

// prefer-exponentiation-operator
/* eslint-disable no-magic-numbers */
(() => {
  const result = Math.pow(2, 2);
})();
/* eslint-enable no-magic-numbers */

// default-case-last
(() => {
  const defaultCaseLast = 'valid';

  switch (defaultCaseLast) {
    default:
      break;
    case 'invalid':
      break;
  }
})();

// no-useless-backreference
/* eslint-disable prefer-named-capture-group */
const noUselessBackreference = /(\1)/;
/* eslint-enable prefer-named-capture-group */

// unused disable directives
// eslint-disable-line no-magic-numbers
