const wdioCommon = require('./wdio.common.conf');
const postTestArtifact = require('../utils/post-test-artifact');

// Running 1 test at a time in a local Chrome browser, ideal for debugging
const capabilities = [
    {
        browserName: 'chrome',
        maxInstances: 1
    }
];

if (process.env.HEADLESS_CHROME) capabilities.forEach(c => {
    c['goog:chromeOptions'] = {
        args: ['--headless', '--disable-gpu']
    };
});

exports.config = Object.assign({
    capabilities,
    maxInstances: 1,
    path: '/',
    runner: 'local',
    chromeDriverLogs: './output',
    services: [
        'chromedriver'
    ],    
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: wdioCommon.connectionRetryTimeout * 2
    },
    specs: [
        './mocha/**/*.js'
    ],
    reporters: [
        [
            'junit',
            {
                outputDir: './test-results/mocha',
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
                disableWebdriverScreenshotsReporting: true
            }
        ]
    ],
    afterTest: function(test, context, { error, result, duration, passed }) {
        if (!passed) {
            postTestArtifact.takeScreenshot(browser);
            postTestArtifact.savePageSource(browser);
        }
    }
}, wdioCommon);
