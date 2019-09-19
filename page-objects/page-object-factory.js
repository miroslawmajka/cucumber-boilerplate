const ExpressPage = require('./express-page');

class PageObjectFactory {
    constructor() {
        this.pages = [
            new ExpressPage()
        ];
    }

    getPageByName(pageName) {
        const page = this.pages.find(e => e.getPageName() === pageName);

        if (!page) throw new Error(`Page "${pageName}" not found in factory`);

        return page;
    }
}

module.exports = PageObjectFactory;