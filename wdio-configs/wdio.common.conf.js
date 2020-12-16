require('dotenv').config();

const HALF_MINUTE = 30000;

const wdioCommon = {
  // Use this flag to avoid using async-await constructs or raw Promise objects
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
};

// Used for VS Code debugging, see README.md for sample debug launch configuration
if (process.env.DEBUG === 'true') {
  wdioCommon.debug = process.env.DEBUG === 'true';
  wdioCommon.execArgv = ['--inspect-brk=127.0.0.1:5859'];
}

module.exports = wdioCommon;
