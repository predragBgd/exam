"use strict";
require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By, Key, until } = require("selenium-webdriver");
const { assert, expect } = require("chai");
const HomePage = require("../pages/home.page");
const RegisterPage = require("../pages/register.page");
const LoginPage = require("../pages/login.page");
const OrderPage = require("../pages/order.page");
const CheckoutPage = require("../pages/checkout.page");
describe("QA Fast Food tests", () => {
  let driver;
  let homePage;
  let registerPage;
  let loginPage;
  let orderPage;
  let checkoutPage;
  before(async () => {
    driver = new webdriver.Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    registerPage = new RegisterPage(driver);
    loginPage = new LoginPage(driver);
    orderPage = new OrderPage(driver);
    checkoutPage = new CheckoutPage(driver);
  });
  after(async () => {
    //await driver.sleep(3000);
    await driver.quit();
  });
  it("Open QA Fast Food page", async () => {
    await homePage.getHomePage();
  });
  it("Register new user", async () => {
    expect(await homePage.getHomepageTitle()).to.eq("QA Fast Food");
    await homePage.getRegisterBtn().click();
    await driver.wait(until.elementLocated(By.name("firstname")));
    await registerPage.getFirstName().sendKeys("Jerry");
    await registerPage.getLastName().sendKeys("Drake");
    await registerPage.getEmail().sendKeys("jerrdrake@locko.loc");
    await registerPage.getUserName().sendKeys("MisterNo");
    await registerPage.getPassword().sendKeys("mn1234");
    await registerPage.getConfirmPassword().sendKeys("mn1234");
    await registerPage.getRegisterBtn().click();
  });
  it("Sign in user", async () => {
    await homePage.getHomePage();
    await homePage.getSignInBtn().click();
    await loginPage.getUserName().sendKeys("MisterNo");
    await loginPage.getPassword().sendKeys("mn1234");
    await loginPage.getLoginBtn().click();
    expect(await homePage.getWelcomeMsg().getText()).to.eq(
      "Welcome back, Jerry"
    );
  });
  it("Shop food", async () => {
    await homePage.getBurger().click();
    await orderPage.getHomePage();
    await homePage.getDoubleBurger().click();
    await orderPage.getHomePage();
    await homePage.getMegaBurger().click();
    expect(await orderPage.getWelcomeMsg2().getText()).to.contain(
      "Quality Assurance (QA) course - Order"
    );
    const burger = await driver.findElement(By.xpath(`//tr[1]/td[4]`));
    const doubleBurger = await driver.findElement(By.xpath(`//tr[2]/td[4]`));
    const megaBurger = await driver.findElement(By.xpath(`//tr[3]/td[4]`));
    const priceTotal = await driver.findElement(By.xpath(`//tr[4]/td`));
    const BurgerPr = Number((await burger.getText()).replace("$", ""));
    const doubleBurgerPr = Number(
      (await doubleBurger.getText()).replace("$", "")
    );
    const megaBurgerPr = Number((await megaBurger.getText()).replace("$", ""));

    const pruiceTotalP = Number(
      (await priceTotal.getText()).replace("Total: $", "")
    );
    expect(BurgerPr + doubleBurgerPr + megaBurgerPr).to.eq(pruiceTotalP);
    await orderPage.getCheckoutBtn().click();

    expect(await checkoutPage.getWelcomeMsg().getText()).to.contain(
      "You have successfully placed your order."
    );
  });
  it("Logout", async () => {
    await checkoutPage.getLogout().click();
    expect(await homePage.getWelcomeMsg2().getText()).to.contain("QA FastFood");
  });
});
