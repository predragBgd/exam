"use strict";

const { By } = require("selenium-webdriver");
const AllPage = require("./all.page");

module.exports = class HomePage extends AllPage {
  #driver;
  constructor(webdriver) {
    super(webdriver);
    this.#driver = webdriver;
  }
  getHomePage() {
    this.#driver.get("http://test.qa.rs/.");
  }
  getHomepageTitle() {
    return this.#driver.getTitle();
  }
  getRegisterBtn() {
    return this.#driver.findElement(By.linkText("Register"));
  }
  getSignInBtn() {
    return this.#driver.findElement(By.linkText("Sign in"));
  }
  getBurger() {
    return this.#driver.findElement(
      By.xpath(`/html/body/div[2]/div[4]/div[2]/div/div[2]/form/p[4]/input`)
    );
  }
  getDoubleBurger() {
    return this.#driver.findElement(
      By.xpath(`/html/body/div[2]/div[4]/div[3]/div/div[2]/form/p[4]/input`)
    );
  }
  getMegaBurger() {
    return this.#driver.findElement(
      By.xpath(`/html/body/div[2]/div[4]/div[4]/div/div[2]/form/p[4]/input`)
    );
  }
};
