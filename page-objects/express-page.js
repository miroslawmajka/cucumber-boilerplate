const Page = require('./page');

class ExpressPage extends Page {
    getPageName() {
        return 'sample-express';
    }

    getPageUrl() {
        return '/';
    }

    getSampleElementSelector() {
        return 'body > p';
    }
}

module.exports = ExpressPage;