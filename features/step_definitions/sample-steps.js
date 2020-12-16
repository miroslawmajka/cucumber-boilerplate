const { Given, Then, When } = require('cucumber');

const PageObjectFactory = require('../../page-objects/page-object-factory');

const pageObjectFactory = new PageObjectFactory();

Given(/^The "([^"]*)" page is opened$/, async function (pageName) {
  const page = pageObjectFactory.getPageByName(pageName);

  this.context.page = await page.navigate();
});

When(/^I get the text value of the page welcome header$/, async function () {
  const page = this.context.page;

  this.context.welcomeHeaderText = await page.getWelcomeHeaderText();
});

Then(/^The expected header text value equals "([^"]*)"$/, function (expectedValue) {
  const welcomeHeaderText = this.context.welcomeHeaderText;

  should.exist(welcomeHeaderText);

  welcomeHeaderText.should.equal(expectedValue);
});

When(/^I click to show payment details button$/, async function () {
  const page = this.context.page;

  await page.clickMoreTextButton();
});

Then(/^The payment details are revealed$/, async function () {
  const page = this.context.page;

  const moreText = await page.waitForMoreText();

  should.exist(moreText);
  moreText.should.be.a('string');
});

When(/^I click on the Pay for Items button$/, async function () {
  const page = this.context.page;

  this.context.frameCurrentValue = await page.getFrameCurrentValue();

  await page.clickSubmitInFrame();
});

Then(/^The payment time text appears with a new value$/, async function () {
  const page = this.context.page;
  const framePreviousValue = this.context.frameCurrentValue;

  const frameCurrentValue = await page.getFrameCurrentValue();

  should.exist(frameCurrentValue);
  frameCurrentValue.should.not.equal(framePreviousValue);
});

When(/^I click the "([^"]*)" top navigation link$/, async function (linkName) {
  const page = this.context.page;

  const topNavigationMap = [
    {
      linkName: 'Index',
      clickAction: async () => await page.clickTopNavigationPaymentPage(),
    },
    {
      linkName: 'Additional Samples',
      clickAction: async () => await page.clickTopNavigationAdditionalSamples(),
    },
  ];

  const topNavigationTarget = topNavigationMap.find((n) => n.linkName === linkName);

  if (!topNavigationTarget) throw new Error(`Link "${linkName}" is not mapped`);

  this.context.page = await topNavigationTarget.clickAction();
});
