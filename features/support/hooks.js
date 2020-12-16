const { After } = require('cucumber');

const postTestArtifact = require('../../utils/post-test-artifact');

const FAILED_STATUS = 'failed';

After(async (scenario) => {
  if (scenario.result.status === FAILED_STATUS) {
    await postTestArtifact.takeScreenshot(browser);
    await postTestArtifact.savePageSource(browser);
  }
});
