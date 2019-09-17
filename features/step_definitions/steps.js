/* eslint-disable prefer-arrow-callback */

const { Given, Then, When } = require("cucumber");

const Page = require("../../page-objects/page");
const GooglePage = require("../../page-objects/google-page");
const googlePage = new GooglePage();

Given(/^I open "([^"]*)" website$/, function(websiteName) {
    const websiteMap = [
        googlePage
    ];

    const website = websiteMap.find(e => e.getPageName() === websiteName);

    should.exist(website);

    this.scenarioContext.sampleElement = website
        .navigate()
        .getSampleElement();
});

When(/^I get the text value of the sample element$/, function() {
    const element = this.scenarioContext.sampleElement;

    should.exist(element);

    this.scenarioContext.textElementValue = Page.getElementText(element);
});

Then(/^The expected text value equals "([^"]*)"$/, function(expectedValue) {
    const elementValue = this.scenarioContext.textElementValue;

    should.exist(elementValue);

    elementValue.should.equal(expectedValue);
});