const OnlineShopperPage = require('./online-shopper-page');

class PaymentPage extends OnlineShopperPage {
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
    return 'payment-page-id';
  }

  getPageUrl() {
    return '/';
  }

  getWelcomeHeaderSelector() {
    return '#pWelcome';
  }

  async clickMoreTextButton() {
    const moreTextButton = $(this.moreTextButtonSelector);

    await moreTextButton.waitForExist();
    await moreTextButton.waitForDisplayed();
    await moreTextButton.waitForEnabled();

    await moreTextButton.click();
  }

  async waitForMoreText() {
    const loading = $(this.loadingSelector);
    const moreText = $(this.moreTextSelector);

    await loading.waitForExist();
    await loading.waitForDisplayed();
    await loading.waitForDisplayed(5000, true);
    await moreText.waitForExist();
    await moreText.waitForDisplayed(5000);

    return await moreText.getText();
  }

  async clickSubmitInFrame() {
    this.switchToFrame();

    const submitButton = $(this.frameSubmitButtonSelector);
    await submitButton.click();
  }

  async getFrameCurrentValue() {
    await this.switchToFrame();

    const frameCurrentValue = $(this.frameCurrentValueSelector);

    // Encountered problem when running tests across Selenium Grid/Node with getText() not waiting for iframe to load
    const submitButton = $(this.frameSubmitButtonSelector);
    await submitButton.waitForExist();
    await submitButton.waitForDisplayed();
    await submitButton.waitForEnabled();

    return await frameCurrentValue.getText();
  }

  async switchToFrame() {
    // Set to main window first
    await browser.switchToFrame(null);

    // From main window selector the iframe
    const frame = $(this.frameSelector);
    await browser.switchToFrame(frame);
  }
}

module.exports = PaymentPage;
