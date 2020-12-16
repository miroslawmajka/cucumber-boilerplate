const wdioCucumber = require('./wdio.cucumber.conf');

// For running in custom "browser farms" with bespoke Selenium Grid solutions
const capabilities = [
  {
    browserName: 'chrome',
    maxInstances: 1,
  },
];

exports.config = Object.assign(
  {
    capabilities,
    maxInstances: 1,
    hostname: process.env.REMOTE_SELENIUM_HOST,
    port: parseInt(process.env.REMOTE_SELENIUM_PORT),
    path: '/wd/hub',
  },
  wdioCucumber,
);
