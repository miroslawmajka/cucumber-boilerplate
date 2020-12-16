class Page {
  navigate() {
    browser.url(this.getPageUrl());

    // Easy method chaining for Selenium actions
    return this;
  }

  // Template methods
  getPageName() {}
  getPageUrl() {}
  getWelcomeHeaderSelector() {}

  // Very generic function for getting a text in an element designated by a selector
  getWelcomeHeaderText() {
    const welcomeHeader = $(this.getWelcomeHeaderSelector());

    welcomeHeader.waitForExist(undefined);
    welcomeHeader.waitForDisplayed(undefined);

    return welcomeHeader.getText();
  }

  // Non-WDIO methods
  async navigateLegacy() {
    const url = `${process.env.BASE_URL}${this.getPageUrl()}`;

    driver.get(url);

    return this;
  }
}

module.exports = Page;
