const Page = require('../page');

class OnlineShopperPage extends Page {
  constructor() {
    super();

    this.indexAnchorSelector = 'body > ul:nth-child(1) > li:nth-child(1) > a';
    this.additionalSamplesAnchorSelector = 'body > ul:nth-child(1) > li:nth-child(2) > a';
  }

  async clickTopNavigationPaymentPage() {
    return await this.clickTopNavigationAnchor(this.indexAnchorSelector);
  }

  async clickTopNavigationAdditionalSamples() {
    return await this.clickTopNavigationAnchor(this.additionalSamplesAnchorSelector);
  }

  async clickTopNavigationAnchor(selector) {
    const additionalSamplesAnchor = $(selector);

    await additionalSamplesAnchor.waitForExist();
    await additionalSamplesAnchor.waitForDisplayed();

    await additionalSamplesAnchor.click();

    return this;
  }
}

module.exports = OnlineShopperPage;
