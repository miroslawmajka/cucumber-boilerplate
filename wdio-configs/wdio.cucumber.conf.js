const wdioCommon = require('./wdio.common.conf');

module.exports = Object.assign({
    framework: 'cucumber',
    specs: [
        './features/*.feature'
    ],
    reporters: [
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
        ]
    ],
    cucumberOpts: {
        format: [
            'pretty'
        ],
        colors: true,
        timeout: wdioCommon.connectionRetryTimeout * 2,
        backtrace: true,
        require: [
            './features/support/*.js',
            './features/step_definitions/*.js'
        ]
    }
}, wdioCommon);
