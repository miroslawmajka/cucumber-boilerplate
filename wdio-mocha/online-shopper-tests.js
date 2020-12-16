const PageObjectFactory = require('../page-objects/page-object-factory');

const pageObjectFactory = new PageObjectFactory();

describe('Online Shopper payments and available items', function () {
  let page = null;

  beforeEach(function () {
    page = pageObjectFactory.getPageByName('payment-page-id');
    page.navigate();
  });

  it('Verifying that the page welcome header contains the expected text', function () {
    const textElementValue = page.getWelcomeHeaderText();

    should.exist(textElementValue);
    textElementValue.should.equal('Welcome to Online Shopper - Payment Page');
  });

  it('Clicking on the show payment details button to reveal them', function () {
    page.clickMoreTextButton();

    const moreText = page.waitForMoreText();

    should.exist(moreText);
    moreText.should.be.a('string');
  });

  it('Clicking the Pay for Items button inside the payment frame shows the payment time', function () {
    const framePreviousValue = page.getFrameCurrentValue();

    page.clickSubmitInFrame();

    const frameCurrentValue = page.getFrameCurrentValue();

    should.exist(frameCurrentValue);
    frameCurrentValue.should.not.equal(framePreviousValue);

    page.clickSubmitInFrame();

    const frameCurrentValueAgain = page.getFrameCurrentValue();

    should.exist(frameCurrentValue);
    frameCurrentValueAgain.should.not.equal(frameCurrentValue);
  });

  it('Verifying that the page welcome header is different in the Available Items page', function () {
    let textElementValue = page.getWelcomeHeaderText();
    should.exist(textElementValue);
    textElementValue.should.equal('Welcome to Online Shopper - Payment Page');

    page = page.clickTopNavigationAvailableItems();

    textElementValue = page.getWelcomeHeaderText();
    should.exist(textElementValue);
    textElementValue.should.equal('Welcome to Online Shopper - Available Items');

    page = page.clickTopNavigationPaymentPage();

    textElementValue = page.getWelcomeHeaderText();
    should.exist(textElementValue);
    textElementValue.should.equal('Welcome to Online Shopper - Payment Page');
  });
});
