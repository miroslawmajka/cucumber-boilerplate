const Page = require('./page');

class ExpressPage extends Page {
    constructor() {
        super();

        this.moreTextButtonSelector = '#btnShowMoreText';
        this.loadingSelector = '#pLoading';
        this.moreTextSelector = '#pMoreText';
    }

    getPageName() {
        return 'sample-express';
    }

    getPageUrl() {
        return '/';
    }

    getSampleElementSelector() {
        return '#pWelcome';
    }

    clickMoreTextButton() {
        const moreTextButton = $(this.moreTextButtonSelector);

        moreTextButton.waitForExist();
        moreTextButton.waitForDisplayed();
        moreTextButton.waitForEnabled();

        moreTextButton.click();
    }

    waitForMoreText() {
        const loading = $(this.loadingSelector);
        const moreText = $(this.moreTextSelector);

        loading.waitForExist();
        loading.waitForDisplayed();
        loading.waitForDisplayed(5000, true);
        moreText.waitForExist();
        moreText.waitForDisplayed(5000);

        return moreText.getText();
    }
}

module.exports = ExpressPage;