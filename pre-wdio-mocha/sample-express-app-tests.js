/* eslint-disable prefer-arrow-callback */

require('dotenv').config();

const { Builder } = require('selenium-webdriver');

const PageObjectFactory = require('../page-objects/page-object-factory');

const pageObjectFactory = new PageObjectFactory();

describe('Sample Mocha Tests', function() {
    before(function()  {
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    });

    beforeEach(async function() {
        global.driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function() {
        if (driver) await driver.quit();
    });

    it('Verifying that the sample page element contains the desired text', async function() { 
        const page = pageObjectFactory.getPageByName('sample-express-app-index');
        await page.navigateLegacy();

        // TODO: implement non-WDIO methods
        // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

        // const textElementValue = page.getSampleElementText();

        // should.exist(textElementValue);
        // textElementValue.should.equal('Welcome to Sample Express Web Application - Index');
    });

    it('Clicking on the button in the page to see more text', function() {
        const page = pageObjectFactory.getPageByName('sample-express-app-index');
        page.navigateLegacy();

        // page.clickMoreTextButton();

        // const moreText = page.waitForMoreText();

        // should.exist(moreText);
        // moreText.should.be.a('string');
    });

    it('Clicking on the iframe submit button refreshes it with a new value', function() {
        const page = pageObjectFactory.getPageByName('sample-express-app-index');
        page.navigateLegacy();

        // const framePreviousValue = page.getFrameCurrentValue();

        // page.clickSubmitInFrame();

        // const frameCurrentValue = page.getFrameCurrentValue();

        // should.exist(frameCurrentValue);
        // frameCurrentValue.should.not.equal(framePreviousValue);

        // page.clickSubmitInFrame();

        // const frameCurrentValueAgain = page.getFrameCurrentValue();

        // should.exist(frameCurrentValue);
        // frameCurrentValueAgain.should.not.equal(frameCurrentValue);
    });

    it('Verifying that the sample page element is different on different pages', function() {
        let page = pageObjectFactory.getPageByName('sample-express-app-index');
        page.navigateLegacy();

        // let textElementValue = page.getSampleElementText();
        // should.exist(textElementValue);
        // textElementValue.should.equal('Welcome to Sample Express Web Application - Index');

        // page = page.clickTopNavigationAdditionalSamples();

        // textElementValue = page.getSampleElementText();
        // should.exist(textElementValue);
        // textElementValue.should.equal('Welcome to Sample Express Web Application - Additional Samples');

        // page = page.clickTopNavigationIndex();

        // textElementValue = page.getSampleElementText();
        // should.exist(textElementValue);
        // textElementValue.should.equal('Welcome to Sample Express Web Application - Index');
    });
});
