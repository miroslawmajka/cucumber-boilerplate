class Page {
    navigate() {
        browser.url(this.getPageUrl());

        return this;
    }

    getPageName() { }
    getPageUrl() { }
    getSampleElement() { }  

    static getElementText(element) {
        const el = $(element);

        el.waitForExist(undefined);
        el.waitForDisplayed(undefined);

        return el.getText();
    }
}

module.exports = Page;