const wdioCommon = require('./wdio.common.conf');
const postTestArtifact = require('../utils/post-test-artifact');

module.exports = Object.assign(
  {
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: wdioCommon.connectionRetryTimeout * 2,
    },
    specs: ['./wdio-mocha/**/*.js'],
    reporters: [
      'spec',
      [
        'junit',
        {
          outputDir: './test-results/mocha',
          outputFileFormat: (options) => {
            const browserName = options.capabilities.browserName.replace(/\s+/g, '');

            return `results-${options.cid}.${browserName}.xml`;
          },
        },
      ],
    ],
    afterTest: async (test, context, { error, result, duration, passed }) => {
      if (!passed) {
        await postTestArtifact.takeScreenshot(browser);
        await postTestArtifact.savePageSource(browser);
      }
    },
  },
  wdioCommon,
);
