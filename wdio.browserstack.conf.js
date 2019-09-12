require('dotenv').config();

const LOGS_DIRECTORY = './target/logs';
const SCREENSHOTS_DIRECTORY = './target/screenshots';
const HALF_MINUTE = 30000;

// const SELENIUM_OPTS = {
//     version: '3.141.5',
//     baseURL: 'https://selenium-release.storage.googleapis.com',
//     drivers: {
//         chrome: {
//             version: '2.43',
//             baseURL: 'https://chromedriver.storage.googleapis.com'
//         }
//     },
//     logger: console.log
// };

exports.config = {
    runner: 'local',
    sync: true,
    debug: false,
    coloredLogs: true,
    screenshotOnReject: true,
    specs: ['./features/*.feature'],
    // logLevel: 'verbose',
    logOutput: LOGS_DIRECTORY,
    reporters: ['spec'],
    screenshotPath: SCREENSHOTS_DIRECTORY,
    waitforTimeout: HALF_MINUTE / 6,
    connectionRetryTimeout: HALF_MINUTE * 2,
    connectionRetryCount: 3,
    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    seleniumLogs: LOGS_DIRECTORY,
    // seleniumArgs: SELENIUM_OPTS,
    // seleniumInstallArgs: SELENIUM_OPTS,
    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
            // chromeOptions: { args: ['disable-infobars'] },
            maxInstances: 1
        }
    ],
    framework: 'cucumber',
    cucumberOpts: {
        format: ['pretty'],
        colors: true,
        timeout: HALF_MINUTE * 10,
        backtrace: true,
        require: [
            './features/support/*.js',
            './features/step_definitions/*.js'
        ]
    },
    before: () => {
        console.log('Running WebdriverIO using Selenium...');

        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    onComplete: exitCode => console.log(`All WebdriverIO workers complete with "${exitCode}" exit code`)
};