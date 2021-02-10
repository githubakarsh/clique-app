import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000/";
Given('opening To Do page', () => {
 cy.visit(url);
})

Then('title should be {string}', (title) => {
    cy.contains(title).should('be.visible');
})
