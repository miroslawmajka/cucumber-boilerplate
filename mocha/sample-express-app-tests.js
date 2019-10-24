/* eslint-disable prefer-arrow-callback */

const PageObjectFactory = require('../page-objects/page-object-factory');

const pageObjectFactory = new PageObjectFactory();

describe('Sample Mocha Tests', function() {
    it('Verifying that the sample page element contains the desired text', function() {
        const page = pageObjectFactory.getPageByName('sample-express-app-index');
        page.navigate();

        const textElementValue = page.getSampleElementText();

        should.exist(textElementValue);
        textElementValue.should.equal('Welcome to Sample Express Web Application - Index');
    });

    it('Clicking on the button in the page to see more text', function() {
        const page = pageObjectFactory.getPageByName('sample-express-app-index');
        page.navigate();

        page.clickMoreTextButton();

        const moreText = page.waitForMoreText();
    
        should.exist(moreText);
        moreText.should.be.a('string');
    });

    it('Clicking on the iframe submit button refreshes it with a new value', function() {
        const page = pageObjectFactory.getPageByName('sample-express-app-index');
        page.navigate();

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

    it('Verifying that the sample page element is different on different pages', function() {
        let page = pageObjectFactory.getPageByName('sample-express-app-index');
        page.navigate();

        let textElementValue = page.getSampleElementText();
        should.exist(textElementValue);
        textElementValue.should.equal('Welcome to Sample Express Web Application - Index');

        page = page.clickTopNavigationAdditionalSamples();

        textElementValue = page.getSampleElementText();
        should.exist(textElementValue);
        textElementValue.should.equal('Welcome to Sample Express Web Application - Additional Samples');

        page = page.clickTopNavigationIndex();

        textElementValue = page.getSampleElementText();
        should.exist(textElementValue);
        textElementValue.should.equal('Welcome to Sample Express Web Application - Index');
    });
});
