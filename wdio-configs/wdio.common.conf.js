const HALF_MINUTE = 30000;

module.exports = {
    sync: true,
    connectionRetryCount: 3,
    waitforTimeout: HALF_MINUTE / 3,
    connectionRetryTimeout: HALF_MINUTE,
    baseUrl: '',    // TODO: set to base environment URL
    logLevel: 'warn',
    framework: 'cucumber',
    reporters: [
        'spec',
        ['junit', {
            outputDir: './test-results',
            outputFileFormat: options => {
                const browserName = options.capabilities.browserName.replace(/\s+/g, '');

                return `results-${options.cid}.${browserName}.xml`;
            }
        }]
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