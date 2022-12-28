"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class CheckoutPage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
};
