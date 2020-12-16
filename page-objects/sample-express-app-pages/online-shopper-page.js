const Page = require('../page');

class OnlineShopperPage extends Page {
  constructor() {
    super();

    this.indexAnchorSelector = 'body > ul:nth-child(1) > li:nth-child(1) > a';
    this.additionalSamplesAnchorSelector = 'body > ul:nth-child(1) > li:nth-child(2) > a';
  }

  clickTopNavigationPaymentPage() {
    return this.clickTopNavigationAnchor(this.indexAnchorSelector);
  }

  clickTopNavigationAvailableItems() {
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

module.exports = OnlineShopperPage;
