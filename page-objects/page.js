class Page {
    navigate() {
        browser.url(this.getPageUrl());

        // Easy method chaining for Selenium actions
        return this;
    }

    // Template methods
    getPageName() { }
    getPageUrl() { }
    getSampleElementSelector() { }

    // Very generic function for getting a text in an element designated by a selector
    getSampleElementText() {
        const element = $(this.getSampleElementSelector());

        element.waitForExist(undefined);
        element.waitForDisplayed(undefined);

        return element.getText();
    }
}

module.exports = Page;