const Page = require('../page');

class SampleExpressAppPage extends Page {
    constructor() {
        super();

        this.indexAnchorSelector = 'body > ul:nth-child(1) > li:nth-child(1) > a';
        this.additionalSamplesAnchorSelector = 'body > ul:nth-child(1) > li:nth-child(2) > a';
    }

    clickTopNavigationIndex() {
        return this.clickTopNavigationAnchor(this.indexAnchorSelector);
    }

    clickTopNavigationAdditionalSamples() {
        return this.clickTopNavigationAnchor(this.additionalSamplesAnchorSelector);
    }

    clickTopNavigationAnchor(selector) {
        const additionalSamplesAnchor = $(selector);

        additionalSamplesAnchor.waitForExist();
        additionalSamplesAnchor.waitForDisplayed();

        additionalSamplesAnchor.click();

        return this;
    }
}

module.exports = SampleExpressAppPage;
