describe('template spec', () => {
 it('registration', function() {
    let num=Math.round(Math.random() * 10000)
    let randompersonalId = Math.floor(Math.random() * 9000000000) + 1000000000;
    let randomphone = '595' + Math.floor(Math.random() * 9000000 + 1000000);
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    cy.fixture("example").then((user) => {
        //რეგისტრაცია ყველა ველის სწორად შევსებით
        cy.contains('რეგისტრაცია').should('be.visible')
cy.get('input[name="first_name"]').type(user.validUser.name)
cy.get('input[name="reg_email"]').type(user.validUser.email + num + '@gmail.com')
cy.get('input[name="personal_id"]').type(user.validUser.personalId + num)
cy.get('input[name="phone"]').type(randomphone + num)
cy.get('input[name="reg_password"]').type(user.validUser.password)
cy.get('input[name="reg_password_confirmation"]').type(user.validUser.password)
cy.get('input[name="agree"]').check({force: true})
cy.get('.regsub').click()
cy.contains('Sorry, the page you are looking for could not be found.').should('be.visible')
cy.visit('https://testzootopia.loremipsum.ge/ka')
cy.contains('პროფილი').should('be.visible')


  })
 })
})