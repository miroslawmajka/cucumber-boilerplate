Feature: Sample Cucumber Feature

  Scenario Outline: Sample Scenario for "<website>" website
    Given I open "<website>" website
    When I get the text value of the sample element
    Then The expected text value equals "<expectedValue>"

    Examples:
      | website | expectedValue |
      | google  | About         |
