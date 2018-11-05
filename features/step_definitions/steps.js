/* eslint-disable prefer-arrow-callback */

const { Given, Then, When } = require('cucumber');

Given(/^I open "([^"]*)" website$/, function(envName) {
    const envMap = [
        {
            name: 'google',
            url: 'https://www.google.com'
        }
    ];

    const url = envMap.find(e => e.name === envName).url;

    browser.url(url);
});

When(/^I get the text value of the "([^"]*)" element$/, function(selector) {
    this.scenarioContext.textElementValue = browser.getText(selector);
});

Then(/^I verify that the expected value equals "([^"]*)"$/, function(expectedValue) {
    this.scenarioContext.textElementValue.should.equal(expectedValue);
});