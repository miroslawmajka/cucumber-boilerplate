/* eslint-disable prefer-arrow-callback */

const { After } = require('cucumber');

After(function(scenario) {
    if (scenario.result.status === 'failed') {
        console.error('FAILED TEST DETAILS');
        console.error(`Feature: "${scenario.sourceLocation.uri}"`);
        console.error(`Scenario Name: "${scenario.pickle.name}"`);
        console.error(`Exception: "${scenario.result.exception.toString()}"`);
    }
});