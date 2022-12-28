"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class OrderPage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  getCheckoutBtn() {
    return this.#driver.findElement(By.name("checkout"));
  }
};
