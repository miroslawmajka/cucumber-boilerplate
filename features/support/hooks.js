const { After } = require('cucumber');

const postTestArtifact = require('../../utils/post-test-artifact');

const FAILED_STATUS = 'failed';

After(scenario => {
    if (scenario.result.status === FAILED_STATUS) {
        postTestArtifact.takeScreenshot(browser);
        postTestArtifact.savePageSource(browser);
    }
});
