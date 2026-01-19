describe('template spec', () => {
        it('cart', function() {
            //პროდუქტის დამატება კალათაში
cy.fixture("login").then((user) => {
                cy.visit('https://testzootopia.loremipsum.ge/ka')
       cy.get('a.rprof').filter(':visible').click()
    cy.get('input[name="login_email"]').type(user.validUser.email)
    cy.get('input[name="login_password"]').type(user.validUser.password)
    cy.get('button.form-button').contains('ავტორიზაცია').click()
    cy.contains('პროფილი').should('be.visible')
  cy.visit('https://testzootopia.loremipsum.ge/ka/product/2996-EHOP-CAGE-HAMSTER-50-TRI-PINK');
    cy.get('.add-pro').first().click({ force: true });
    cy.visit('https://testzootopia.loremipsum.ge/ka/cart');
    cy.contains('EHOP CAGE HAMSTER 50 TRI PINK').should('be.visible');
        }) }) })