Feature: Sample Cucumber Feature

    Scenario Outline: Sample Scenario for "<website>" website
        Given I open "<website>" website
        When I get the text value of the "<selector>" element
        Then I verify that the expected value equals "<expectedValue>"

        Examples:
            | website | selector                                     | expectedValue |
            | google  | //*[@id="tsf"]/div[2]/div[3]/center/input[1] | Google Search |