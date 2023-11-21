context('TextCheck', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/')
    })
  
    it('Check main page text', () => {
        cy.get('h1').contains('Főoldal').should('be.visible')
    })

    it('Navigate to about', () =>{
        cy.contains('About').click()
        cy.contains('Leírás').should('be.visible')
    })

    it('Fill form', () =>{
        cy.contains('Form').click()
        cy.get('input[id=exampleInputEmail1]').type('abc@abc.com')
        cy.get('input[id=exampleInputPassword1]').type('test12345')
        cy.get('input[id=exampleCheck1]').check().debug()
    })
})