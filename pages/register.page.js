"use strict";

const { By } = require("selenium-webdriver");

module.exports = class RegisterPage {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  getFirstName() {
    const firstName = this.#driver.findElement(By.name("firstname"));
    return firstName;
  }
  getLastName() {
    const lastName = this.#driver.findElement(By.name("lastname"));
    return lastName;
  }
  getEmail() {
    const email = this.#driver.findElement(By.name("email"));
    return email;
  }
  getUserName() {
    const userName = this.#driver.findElement(By.name("username"));
    return userName;
  }
  getPassword() {
    const password = this.#driver.findElement(By.name("password"));
    return password;
  }
  getConfirmPassword() {
    const confirmPassword = this.#driver.findElement(By.name("passwordAgain"));
    return confirmPassword;
  }
  getRegisterBtn() {
    return this.#driver.findElement(By.name("register"));
  }
};
