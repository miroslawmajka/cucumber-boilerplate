const Page = require('./page');

class ExpressPage extends Page {
    getPageName() {
        return 'sample-express';
    }

    getPageUrl() {
        return 'http://localhost:3000/';
    }

    getSampleElementSelector() {
        return 'body > p';
    }
}

module.exports = ExpressPage;