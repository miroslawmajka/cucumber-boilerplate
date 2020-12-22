const SampleExpressAppPage = require('./online-shopper-page');

class AvailableItemsPage extends SampleExpressAppPage {
  constructor() {
    super();
  }

  getPageName() {
    return 'sample-express-app-additional-samples';
  }

  getPageUrl() {
    return '/additional-samples';
  }

  getWelcomeHeaderSelector() {
    return '#pWelcome';
  }
}

module.exports = AvailableItemsPage;
