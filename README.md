# Cucumber Boilerplate

Node.js Cucumber WebdriverIO Chromedriver and BrowserStack Boilerplate

Circle CI Build Status: [![CircleCI](https://circleci.com/gh/miroslawmajka/cucumber-boilerplate.svg?style=svg)](https://circleci.com/gh/miroslawmajka/cucumber-boilerplate)

# Usage

Open your favourite CLI and run the following commands to restore dependencies, lint the JavaScript and run the automated selenium tests against a local Express application:
```
# Install dependencies
npm install

# Lint the JavaScript
npm run lint

# Run the end-to-end testing by starting a local Express app, running WebdriverIO Cucumber scenarios and close down the app
npm e2e
```