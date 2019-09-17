const wdioCommon = require("./wdio.common.conf");

exports.config = Object.assign({
    maxInstances: 1,
    runner: "local",
    chromeDriverLogs: "./output",
    path: "/",
    services: [
        "chromedriver"
    ],
    specs: [
        "./features/*.feature"
    ],
    capabilities: [
        {
            browserName: "chrome",
            maxInstances: 1
        }
    ],
    onComplete: (exitCode, config, capabilities, results) => {
        console.log(`All WebdriverIO workers complete with "${exitCode}" exit code`);
    }
}, wdioCommon);