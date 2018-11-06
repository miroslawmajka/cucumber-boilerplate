/* eslint-disable prefer-arrow-callback */

const { Given, Then, When } = require('cucumber');

const Page = require('../../page-objects/page');
const GooglePage = require('../../page-objects/google-page');
const GithubPage = require('../../page-objects/github-page');
const googlePage = new GooglePage();
const githubPage = new GithubPage();

Given(/^I open "([^"]*)" website$/, function(websiteName) {
    const websiteMap = [
        googlePage,
        githubPage
    ];

    const website = websiteMap.find(e => e.getPageName() === websiteName);

    should.exist(website);

    website.navigate();

    this.scenarioContext.sampleElement = website.getSampleElement();
});

When(/^I get the text value of the sample element$/, function() {
    const element = this.scenarioContext.sampleElement;

    should.exist(element);

    this.scenarioContext.textElementValue = Page.getElementText(element);
});

Then(/^I verify that the expected text value equals "([^"]*)"$/, function(expectedValue) {
    const elementValue = this.scenarioContext.textElementValue;

    should.exist(elementValue);

    elementValue.should.equal(expectedValue);
});