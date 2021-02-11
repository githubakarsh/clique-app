import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000/";
Given('opening To Do page', () => {
 cy.visit(url);
})

Then('title should be {string}', (title) => {
    cy.contains(title).should('be.visible');
});

When('i add a new item', () => {
    cy.get('input[id="todo-input"]').as("todo-inputField");
    cy.get('@todo-inputField').type('Learn Cypress');
    cy.get('button[id="AddTask"]').click();
});

Then('input value must be empty', () => {
    cy.get('input[id="todo-input"]').invoke('val').should('be.empty');
})

Then('new item added to list', () => {
    cy.get('li:contains("Learn Cypress")');
});

Then('close icon should be displayed in li', () => {
    cy.get('span[id="closeIcon"]');
});

When('close icon is clicked', () => {
    cy.get('span[id="closeIcon"]').click({ multiple: true });
});

Then('{string} should be deleted', (string) => {
    cy.get('ul>li').should('not.have', string);
});

When('button clicked on empy value', () => {
    cy.get('input[id="todo-input"]').invoke('val').should('be.empty');
    cy.get('button[id="AddTask"]').click();
});

Then('should displayed {string}', (title) => {
    cy.contains(title).should('be.visible');
});