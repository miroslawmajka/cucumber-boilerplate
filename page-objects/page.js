class Page {
    navigate() {
        browser.url(this.getPageUrl());
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