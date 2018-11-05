const SELENIUM_OPTS = {
    version: '3.13.0',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
        chrome: {
            version: '2.41',
            baseURL: 'https://chromedriver.storage.googleapis.com'
        }
    }
};

exports.config = {
    sync: true,
    debug: false,
    coloredLogs: true,
    screenshotOnReject: true,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    logLevel: 'verbose',
    logOutput: './target/logs',
    screenshotPath: './target/screenshots',
    specs: ['./features/*.feature'],
    services: ['selenium-standalone'],
    seleniumLogs: './target/logs',
    seleniumArgs: SELENIUM_OPTS,
    seleniumInstallArgs: SELENIUM_OPTS,
    capabilities: [
        {
            browserName: 'Chrome',
            chromeOptions: { args: ['disable-infobars'] },
            maxInstances: 1
        }
    ],
    reporters: ['spec', 'dot'],
    framework: 'cucumber',
    cucumberOpts: {
        format: ['pretty'],
        colors: true,
        timeout: 60000,
        backtrace: true,
        require: [
            './features/support/*.js',
            './features/step_definitions/*.js'
        ]
    },
    before: () => {
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    }
};