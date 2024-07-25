export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw new TypeError();
    if (typeof code !== 'string') throw new TypeError();
    this._name = name;
    this._code = code;
  }
  toString() {
    return `[object ${this._code}]`;
  }
}

