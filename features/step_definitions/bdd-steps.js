const { Given, Then, When } = require('cucumber');

const PageObjectFactory = require('../../page-objects/page-object-factory');

const pageObjectFactory = new PageObjectFactory();

Given(/^The "([^"]*)" page is opened$/, function (pageName) {
  const page = pageObjectFactory.getPageByName(pageName);

  this.context.page = page.navigate();
});

When(/^I get the text value of the page welcome header$/, function () {
  const page = this.context.page;

  this.context.welcomeHeaderText = page.getWelcomeHeaderText();
});

Then(/^The expected header text value equals "([^"]*)"$/, function (expectedValue) {
  const welcomeHeaderText = this.context.welcomeHeaderText;

  should.exist(welcomeHeaderText);

  welcomeHeaderText.should.equal(expectedValue);
});

When(/^I click to show payment details button$/, function () {
  const page = this.context.page;

  page.clickMoreTextButton();
});

Then(/^The payment details are revealed$/, function () {
  const page = this.context.page;

  const moreText = page.waitForMoreText();

  should.exist(moreText);
  moreText.should.be.a('string');
});

When(/^I click on the Pay for Items button$/, function () {
  const page = this.context.page;

  this.context.frameCurrentValue = page.getFrameCurrentValue();

  page.clickSubmitInFrame();
});

Then(/^The payment time text appears with a new value$/, function () {
  const page = this.context.page;
  const framePreviousValue = this.context.frameCurrentValue;

  const frameCurrentValue = page.getFrameCurrentValue();

  should.exist(frameCurrentValue);
  frameCurrentValue.should.not.equal(framePreviousValue);
});

When(/^I click the "([^"]*)" top navigation link$/, function (linkName) {
  const page = this.context.page;

  const topNavigationMap = [
    {
      linkName: 'Payment Page',
      clickAction: () => page.clickTopNavigationPaymentPage(),
    },
    {
      linkName: 'Available Items',
      clickAction: () => page.clickTopNavigationAvailableItems(),
    },
  ];

  const topNavigationTarget = topNavigationMap.find((n) => n.linkName === linkName);

  if (!topNavigationTarget) throw new Error(`Link "${linkName}" is not mapped`);

  this.context.page = topNavigationTarget.clickAction();
});
