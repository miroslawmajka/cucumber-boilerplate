const SampleExpressAppPage = require('./sample-express-app-page');

class AdditionalSamplesPage extends SampleExpressAppPage {
    constructor() {
        super();
    }

    getPageName() {
        return 'sample-express-app-additional-samples';
    }

    getPageUrl() {
        return '/additional-samples';
    }

    getSampleElementSelector() {
        return '#pWelcome';
    }
}

module.exports = AdditionalSamplesPage;