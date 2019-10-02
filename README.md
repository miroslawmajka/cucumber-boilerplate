# Cucumber Boilerplate

Node.js Cucumber WebdriverIO Chromedriver and BrowserStack Boilerplate

Circle CI Build Status: [![CircleCI](https://circleci.com/gh/miroslawmajka/cucumber-boilerplate.svg?style=svg)](https://circleci.com/gh/miroslawmajka/cucumber-boilerplate)

WebdriverIO API (ver. 5): https://webdriver.io/docs/api.html
Webdriver Protocol: https://webdriver.io/docs/api/webdriver.html

# Usage

Open your favourite CLI, like Git Bash in Windows and run the following commands:
```
# Installs dependencies
npm install

# Lints the JavaScript
npm run lint

# Runs the end-to-end testing using WebdriverIO Cucumber scenarios and closes down the app
npm test
```

Please see the specific `package.json` scripts and the `wdio-configs`
for details about running the tests locally using Chromedriver (with GUI or not) or
by delegating the testing effor to BrowserStack.

# TODO

* CrossBrowserTesting (https://webdriver.io/docs/crossbrowsertesting-service.html)
* Video Reporter (https://webdriver.io/docs/wdio-video-reporter.html)