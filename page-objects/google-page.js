const Page = require("./page");

class GooglePage extends Page {
    getPageName() { return "google"; }
    getPageUrl() { return "https://www.google.com"; }
    getSampleElement() { return "//*[@id=\"hptl\"]/a[1]"; }
}

module.exports = GooglePage;