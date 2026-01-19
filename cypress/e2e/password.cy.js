describe('template spec', () => {
        it('password', function() {
            cy.fixture("login").then((user) => {

            //პაროლის აღდგენა
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('a.rprof').filter(':visible').click()
cy.contains('აღდგენა').should('be.visible')
cy.get('a.recovery-btn').click()
cy.contains('პაროლის აღდგენა').should('be.visible')
cy.get('input[name="reset_email"]').type(user.validUser.email)
cy.get('button.form-button').contains('აღდგენა').click()
cy.contains('Whoops, something went wrong on our servers.').should('be.visible')

        }) }) })