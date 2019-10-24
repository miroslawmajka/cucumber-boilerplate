require('dotenv').config();

const HALF_MINUTE = 30000;

module.exports = {
    sync: true,
    connectionRetryCount: 3,
    waitforTimeout: HALF_MINUTE / 3,
    connectionRetryTimeout: HALF_MINUTE,
    baseUrl: process.env.BASE_URL,
    logLevel: 'warn',
    before: (capabilities, specs) => {
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    onComplete: (exitCode, config, capabilities, results) => {
        console.log(`All WebdriverIO workers complete with "${exitCode}" exit code`);
    },
    reporters: [
        'spec'
    ]
};
