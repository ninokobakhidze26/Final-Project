describe('template spec', () => {
it('login', function() {
cy.fixture("login").then((user) => {
 //ავტორიზაცია სწორი მონაცემებით
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('a.rprof').filter(':visible').click()
    cy.contains('არ გაქვთ გავლილი რეგისტრაცია ?').should('be.visible')
    cy.get('input[name="login_email"]').type(user.validUser.email)
    cy.get('input[name="login_password"]').type(user.validUser.password)
    cy.get('button.form-button').contains('ავტორიზაცია').click()
    cy.contains('პროფილი').should('be.visible')
    })})})