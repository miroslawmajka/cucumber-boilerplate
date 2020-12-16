class Page {
  async navigate() {
    await browser.url(this.getPageUrl());

    // Easy method chaining for Selenium actions
    return this;
  }

  // Template methods
  getPageName() {}
  getPageUrl() {}
  getWelcomeHeaderSelector() {}

  // Very generic function for getting a text in an element designated by a selector
  async getWelcomeHeaderText() {
    const welcomeHeader = $(this.getWelcomeHeaderSelector());

    await welcomeHeader.waitForExist(undefined);
    await welcomeHeader.waitForDisplayed(undefined);

    return await welcomeHeader.getText();
  }

  // Non-WDIO methods
  async navigateLegacy() {
    const url = `${process.env.BASE_URL}${this.getPageUrl()}`;

    await driver.get(url);

    return this;
  }
}

module.exports = Page;
