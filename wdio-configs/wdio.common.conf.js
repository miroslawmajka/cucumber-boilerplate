const video = require('wdio-video-reporter');

require('dotenv').config();

const HALF_MINUTE = 30000;

module.exports = {
    sync: true,
    connectionRetryCount: 3,
    waitforTimeout: HALF_MINUTE / 3,
    connectionRetryTimeout: HALF_MINUTE,
    baseUrl: process.env.BASE_URL,
    logLevel: 'warn',
    framework: 'cucumber',
    specs: [
        './features/*.feature'
    ],
    reporters: [
        'spec',
        [
            'junit',
            {
                outputDir: './test-results/cucumber',
                outputFileFormat: options => {
                    const browserName = options.capabilities.browserName.replace(/\s+/g, '');

                    return `results-${options.cid}.${browserName}.xml`;
                }
            }
        ],
        [
            'allure',
            {
                outputDir: './test-results/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true
            }
        ],
        [
            video, 
            {
                outputDir: './output/videos',
                saveAllVideos: true,       // If true, also saves videos for successful test cases
                videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
            }
        ],
    ],
    cucumberOpts: {
        format: [
            'pretty'
        ],
        colors: true,
        timeout: HALF_MINUTE * 2,
        backtrace: true,
        require: [
            './features/support/*.js',
            './features/step_definitions/*.js'
        ]
    },
    before: (capabilities, specs) => {
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    }
};