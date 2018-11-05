/* eslint-disable prefer-arrow-callback */

const { Given, Then, When } = require('cucumber');

Given(/^I open "([^"]*)" website$/, function(websiteName) {
    const websiteMap = [
        {
            name: 'google',
            url: 'https://www.google.com',
            sampleElement: '//*[@id="tsf"]/div[2]/div[3]/center/input[1]'
        }
    ];

    const website = websiteMap.find(e => e.name === websiteName);

    should.exist(website);

    browser.url(website.url);

    this.scenarioContext.sampleElement = website.sampleElement;
});

When(/^I get the value of the sample element$/, function() {
    should.exist(this.scenarioContext.sampleElement);

    this.scenarioContext.textElementValue = browser.getValue(this.scenarioContext.sampleElement);
});

Then(/^I verify that the expected value equals "([^"]*)"$/, function(expectedValue) {
    should.exist(this.scenarioContext.textElementValue);

    this.scenarioContext.textElementValue.should.equal(expectedValue);
});