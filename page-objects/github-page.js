const Page = require('./page');

class GithubPage extends Page {
    getPageName() { return 'github'; }
    getPageUrl() { return 'https://github.com/'; }
    getSampleElement() { return '/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/a'; }
}

module.exports = GithubPage;