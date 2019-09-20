const moment = require('moment');
const fs = require('fs');
const { After } = require('cucumber');

const SCREENSHOTS_DIR = './output/screenshots';
const PAGE_SOURCES_DIR = './output/page-sources';
const TIMESTAMP_FORMAT = 'YYYY-MM-DD-HH-mm-ss.SSS';
const FAILED_STATUS = 'failed';

After(scenario => {
    if (scenario.result.status === FAILED_STATUS) {
        const timestamp = moment().format(TIMESTAMP_FORMAT);

        const screenshotFileName = `SCREENSHOT_${timestamp}.png`;
        const screenshotPath = `${SCREENSHOTS_DIR}/${screenshotFileName}`;

        try {
            fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
            browser.saveScreenshot(screenshotPath);
            console.log(`Screenshot "${screenshotPath}" saved`);
        } catch (err) {
            console.warn(`Failed saving "${screenshotPath}" screenshot:`);
            console.warn(err);
        }

        const pageSourceFileName = `PAGE_SOURCE_${timestamp}.html`;
        const pageSourcePath = `${PAGE_SOURCES_DIR}/${pageSourceFileName}`;

        try{
            fs.mkdirSync(PAGE_SOURCES_DIR, { recursive: true });
            fs.writeFileSync(pageSourcePath, browser.getPageSource());
            console.log(`Page source "${pageSourcePath}" saved.`);
        } catch (err) {
            console.warn(`Failed saving "${pageSourcePath}" page source:`);
            console.warn(err);
        }

        console.error('FAILED TEST DETAILS');
        console.error(`Feature: "${scenario.sourceLocation.uri}"`);
        console.error(`Scenario Name: "${scenario.pickle.name}"`);
        console.error(`Exception: "${scenario.result.exception.toString()}"`);
    }
});