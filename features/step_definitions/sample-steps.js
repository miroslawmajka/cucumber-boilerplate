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

When(/^I click on the show more text button$/, function() {
    const page = this.scenarioContext.page;

    page.clickMoreTextButton();
});

Then(/^The more text eventually appears$/, function() {
    const page = this.scenarioContext.page;

    const moreText = page.waitForMoreText();

    should.exist(moreText);
    moreText.should.be.a('string');
});

When(/^I click on the iframe submit button$/, function() {
    const page = this.scenarioContext.page;

    this.scenarioContext.frameCurrentValue = page.getFrameCurrentValue();

    page.clickSubmitInFrame();
});

Then(/^The iframe refreshes with a new value$/, function() {
    const page = this.scenarioContext.page;
    const framePreviousValue = this.scenarioContext.frameCurrentValue;

    const frameCurrentValue = page.getFrameCurrentValue();

    should.exist(frameCurrentValue);
    frameCurrentValue.should.not.equal(framePreviousValue);
});

When(/^I click the "([^"]*)" top navigation link$/, function(linkName) {
    const page = this.scenarioContext.page;

    const topNavigationMap = [
        {
            linkName: 'Index',
            clickAction: () => page.clickTopNavigationIndex()
        },
        {
            linkName: 'Additional Samples',
            clickAction: () => page.clickTopNavigationAdditionalSamples()
        }
    ];

    const topNavigationTarget = topNavigationMap.find(n => n.linkName === linkName);

    if (!topNavigationTarget) throw new Error(`Link "${linkName}" is not mapped`);

    this.scenarioContext.page = topNavigationTarget.clickAction();
});
