Feature: Sample Cucumber Feature

    Scenario Outline: Sample Scenario for "<website>" website
        Given I open "<website>" website
        When I get the value of the sample element
        Then I verify that the expected value equals "<expectedValue>"

        Examples:
            | website | expectedValue |
            | google  | Google Search |