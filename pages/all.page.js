"use strict";

const { By } = require("selenium-webdriver");

module.exports = class AllPage {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  getHomePage() {
    this.#driver.get("http://test.qa.rs/.");
  }
  getWelcomeMsg() {
    return this.#driver.findElement(By.xpath(`//h2`));
  }
  getWelcomeMsg2() {
    return this.#driver.findElement(By.xpath(`//h1`));
  }
  getLogout() {
    return this.#driver.findElement(By.partialLinkText("Logout"));
  }
};
