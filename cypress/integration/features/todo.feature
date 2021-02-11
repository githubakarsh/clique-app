Feature: Todo Page

I want to open Todo Page

Scenario: opening To Do Page
Given opening To Do page
Then title should be 'To Do'

Scenario: on To Do page, displays input field with button
When i add a new item
Then new item added to list
Then close icon should be displayed in li

Scenario: the value of input must be empty
When i add a new item
Then input value must be empty

Scenario: display error message, when button is clicked with out input value
When button clicked on empy value
Then should displayed 'Please enter task'

Scenario: When Close icon is clicked
When close icon is clicked
Then 'Learn Cypress' should be deleted



