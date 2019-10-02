Feature: Sample Cucumber Feature

  Background: Always open the sample page first
    # Very start of a cucumber test scenario (the arrangement), opening a page to start with
    Given The "sample-express" page is opened

  Scenario: Verfying that the sample page element contains the desired text
    # The action, a very generic call to get some sample value from the page
    When I get the text value of the sample element

    # The assertion of the value, injected through the step parameter
    Then The expected text value equals "Welcome to Sample Express Web Application"

  Scenario: Clicking on the button in the page to see more text
    When I click on the show more text button
    Then The more text eventually appears

  Scenario: Clicking on the iframe submit button refreshes it with a new value
    When I click on the iframe submit button
    Then The iframe refreshes with a new value
    When I click on the iframe submit button
    Then The iframe refreshes with a new value