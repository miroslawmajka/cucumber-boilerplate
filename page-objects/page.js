class Page {
  navigate() {
    browser.url(this.getPageUrl());

    // Easy method chaining for Selenium actions
    return this;
  }

  // Template methods
  getPageName() {}
  getPageUrl() {}
  getSampleElementSelector() {}

  // Very generic function for getting a text in an element designated by a selector
  getSampleElementText() {
    const element = $(this.getSampleElementSelector());

    element.waitForExist(undefined);
    element.waitForDisplayed(undefined);

    return element.getText();
  }

  // Non-WDIO methods
  async navigateLegacy() {
    const url = `${process.env.BASE_URL}${this.getPageUrl()}`;

    await driver.get(url);

    return this;
  }
}

module.exports = Page;
