/* eslint-disable prefer-arrow-callback */

const { Given, Then, When } = require('cucumber');

const PageObjectFactory = require('../../page-objects/page-object-factory');

const pageObjectFactory = new PageObjectFactory();

Given(/^The "([^"]*)" page is opened$/, function(pageName) {
    const page = pageObjectFactory.getPageByName(pageName);

    this.scenarioContext.page = page.navigate();
});

When(/^I get the text value of the sample element$/, function() {
    const page = this.scenarioContext.page;

    this.scenarioContext.textElementValue = page.getSampleElementText();
});

Then(/^The expected text value equals "([^"]*)"$/, function(expectedValue) {
    const textElementValue = this.scenarioContext.textElementValue;

    should.exist(textElementValue);

    textElementValue.should.equal(expectedValue);
});