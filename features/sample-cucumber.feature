Feature: Sample Cucumber Feature

  Scenario: Sample scenario for a local express page
    # Very start of a cucumber test scenario (the arrangement), opening a page to start with
    Given The "sample-express" page is opened

    # The action, a very generic call to get some sample value from the page
    When I get the text value of the sample element

    # The assertion of the value, injected through the step parameter
    Then The expected text value equals "Welcome to Express"
