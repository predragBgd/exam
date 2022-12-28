"use strict";

const { By } = require("selenium-webdriver");

module.exports = class LoginPage {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  getUserName() {
    const userName = this.#driver.findElement(By.name("username"));
    return userName;
  }
  getPassword() {
    const password = this.#driver.findElement(By.name("password"));
    return password;
  }
  getLoginBtn() {
    return this.#driver.findElement(By.name("login"));
  }
};
