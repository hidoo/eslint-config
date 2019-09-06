module.exports = class Hoge {
  static staticProp = true;

  static staticMethod() {
    return true;
  }

  instanceProp = true;

  _instancePrivateProps = true;

  constructor(value) {
    this.instanceProp = value;
  }

  instanceMethod() {
    return this.instanceProp;
  }

  get instanceValue() {
    return this.instanceProp;
  }

  set instanceValue(value) {
    this.instanceProp = value;
  }

  _instancePrivateMethod() {
    return this._instancePrivateProps; // eslint-disable-line no-underscore-dangle
  }
};
