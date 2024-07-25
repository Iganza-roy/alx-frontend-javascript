import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number") throw new TypeError();
    if (!(currency instanceof Currency)) throw new TypeError();

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== "number") throw new TypeError();
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) throw new TypeError();
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number" || typeof conversionRate !== "number") {
      throw new TypeError();
    }
    return amount * conversionRate;
  }
}
