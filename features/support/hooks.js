/* eslint-disable prefer-arrow-callback */

const { After, Before, AfterAll, BeforeAll } = require('cucumber');

After(function(scenario) {
    if (scenario.result.status === 'failed') {
        console.err('FAILED TEST DETAILS');
        console.err(`Feature: "${scenario.sourceLocation.uri}"`);
        console.err(`Scenario Name: "${scenario.pickle.name}"`);
        console.err(`Exception: "${scenario.result.exception.toString()}"`);
    }
});

Before(function() {
    console.log('Before hook fired') ;
});

AfterAll(function() {
    console.log('AfterAll hook fired') ;
});

BeforeAll(function() {
    console.log('BeforeAll hook fired') ;
});