// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('register', (user) => {
  cy.visit('https://testzootopia.loremipsum.ge/__/#/specs/runner?file=cypress/e2e/registration.cy.js');
  cy.get('input[name="first_name"]').type(user.name);
  cy.get('input[name="phone"]').type(user.phone);
  cy.get('input[name="personal_id"]').type(user.personalId);
  cy.get('input[name="reg_email"]').type(user.email);
  cy.get('input[name="reg_password"]').type(user.password);
  cy.get('input[name="reg_password_confirmation"]').type(user.password); {
    cy.get('input[name="terms"]').check();
  }
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('login', (email1, password1) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email1);
  cy.get('input[name="password"]').type(password1);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('addProductToCart', (productName) => {
  cy.visit('https://testzootopia.loremipsum.ge/__/#/specs/runner?file=cypress/e2e/cart.cy.js');
  cy.contains(productName).click();
  cy.get('button.add-to-cart').click();
});
  