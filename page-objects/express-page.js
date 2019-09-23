const Page = require('./page');

class ExpressPage extends Page {
    constructor() {
        super();

        this.moreTextButtonSelector = '#btnShowMoreText';
        this.loadingSelector = '#pLoading';
        this.moreTextSelector = '#pMoreText';
        this.frameSelector = '#frame';
        this.frameSubmitButtonSelector = '#submitFrame';
        this.frameCurrentValueSelector = '#frameCurrentValue';
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

    clickSubmitInFrame() {
        this.switchToFrame();

        const submitButton = $(this.frameSubmitButtonSelector);
        submitButton.click();
    }

    getFrameCurrentValue() {
        this.switchToFrame();

        const frameCurrentValue = $(this.frameCurrentValueSelector);

        return frameCurrentValue.getText();
    }

    switchToFrame() {
        // Set to main window first
        browser.switchToFrame(null);

        // From main window selector the iframe
        const frame = $(this.frameSelector);
        browser.switchToFrame(frame);
    }
}

module.exports = ExpressPage;