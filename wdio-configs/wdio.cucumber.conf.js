const wdioCommon = require('./wdio.common.conf');

module.exports = Object.assign(
  {
    framework: 'cucumber',
    cucumberOpts: {
      format: ['pretty'],
      colors: true,
      timeout: wdioCommon.connectionRetryTimeout * 2,
      backtrace: true,
      require: ['./features/support/*.js', './features/step_definitions/*.js'],
    },
    specs: ['./features/*.feature'],
    reporters: [
      'spec',
      [
        'junit',
        {
          outputDir: './test-results/cucumber',
          outputFileFormat: (options) => {
            const browserName = options.capabilities.browserName.replace(/\s+/g, '');

            return `results-${options.cid}.${browserName}.xml`;
          },
        },
      ],
    ],
  },
  wdioCommon,
);
