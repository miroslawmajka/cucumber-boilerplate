Feature: Sample Cucumber Feature

  Background:
    # Very start of a cucumber test scenario (the arrangement), opening a page to start with
    Given The "sample-express" page is opened

  Scenario: Verfying that the sample page element contains the desired text
    # The action, a very generic call to get some sample value from the page
    When I get the text value of the sample element

    # The assertion of the value, injected through the step parameter
    Then The expected text value equals "Welcome to Cucumber Boilerplate Express"

  Scenario: Clicking on the button in the page to see more text
    When I click on the show more text button
    Then The more text eventually appears