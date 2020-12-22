const PaymentPage = require('./sample-express-app-pages/payment-page');
const AvailableItemsPage = require('./sample-express-app-pages/available-items-page');

class PageObjectFactory {
  constructor() {
    this.pages = [new PaymentPage(), new AvailableItemsPage()];
  }

  getPageByName(pageName) {
    const page = this.pages.find((e) => e.getPageName() === pageName);

    if (!page) throw new Error(`Page "${pageName}" not found in factory`);

    return page;
  }
}

module.exports = PageObjectFactory;
