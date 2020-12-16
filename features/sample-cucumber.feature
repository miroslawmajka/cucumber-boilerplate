Feature: Online Shopper payments and available items

  Background: Always open the payment page first
    # "Arrange"
    Given The "payment-page-id" page is opened

  Scenario: Verifying that the page welcome header contains the expected text
    # "Act"
    When I get the text value of the page welcome header

    # "Assert"
    Then The expected header text value equals "Welcome to Online Shopper - Payment Page"

  Scenario: Clicking on the show payment details button to reveal them
    When I click to show payment details button
    Then The payment details are revealed

  Scenario: Clicking the Pay for Items button inside the payment frame shows the payment time
    When I click on the Pay for Items button
    Then The payment time text appears with a new value
    When I click on the Pay for Items button
    Then The payment time text appears with a new value

  Scenario: Verifying that the page welcome header is different in the Available Items page
    When I get the text value of the page welcome header
    Then The expected header text value equals "Welcome to Online Shopper - Payment Page"

    When I click the "Available Items" top navigation link
    And I get the text value of the page welcome header
    Then The expected header text value equals "Welcome to Online Shopper - Available Items"

    When I click the "Payment Page" top navigation link
    And I get the text value of the page welcome header
    Then The expected header text value equals "Welcome to Online Shopper - Payment Page"
