describe('template spec', () => {
        it('invalidlogin', function() {
cy.fixture("login").then((user) => {
    //ავტორიზაცია არასწორი მონაცემებით
            cy.visit('https://testzootopia.loremipsum.ge/ka')
            cy.get('a.rprof').filter(':visible').click()
            cy.contains('გაიარეთ რეგისტრაცია').should('be.visible')
            cy.get('input[name="login_email"]').type(user.invalidUser.email)
            cy.get('input[name="login_password"]').type(user.invalidUser.password)
            cy.get('button.form-button').contains('ავტორიზაცია').click()
            cy.get('div.input-div.alert').should('be.visible')
            }) })})