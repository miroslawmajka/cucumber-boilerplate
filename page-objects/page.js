class Page {
    navigate() {
        browser.url(this.getPageUrl());
    }

    getPageName() { }
    getPageUrl() { }
    getSampleElement() { }

    static getElementText(element) {
        browser.waitForExist(element);
        browser.waitForVisible(element);

        return browser.getText(element);
    }
}

module.exports = Page;