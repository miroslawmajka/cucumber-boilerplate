const wdioCommon = require('./wdio.common.conf');
const postTestArtifact = require('../utils/post-test-artifact');

module.exports = Object.assign({  
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: wdioCommon.connectionRetryTimeout * 2
    },
    specs: [
        './wdio-mocha/**/*.js'
    ],
    reporters: [
        'spec',
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
