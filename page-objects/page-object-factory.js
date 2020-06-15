const IndexPage = require('./sample-express-app-pages/index-page');
const AdditionalSamplesPage = require('./sample-express-app-pages/additional-samples-page');

class PageObjectFactory {
    constructor() {
        this.pages = [new IndexPage(), new AdditionalSamplesPage()];
    }

    getPageByName(pageName) {
        const page = this.pages.find(e => e.getPageName() === pageName);

        if (!page) throw new Error(`Page "${pageName}" not found in factory`);

        return page;
    }
}

module.exports = PageObjectFactory;
