const wdioCommon = require('./wdio.common.conf');

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
    specs: [
        './features/*.feature'
    ],
    onComplete: (exitCode, config, capabilities, results) => {
        console.log(`All WebdriverIO workers complete with "${exitCode}" exit code`);
    }
}, wdioCommon);