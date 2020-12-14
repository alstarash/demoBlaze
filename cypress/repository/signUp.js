export class SignUp {
    static clickSignUp(){
        cy.task('log', 'Click on Signup')
        cy.get('#narvbarx').within(() => {
            cy.get('#signin2').should('be.visible').click({ force: true})
        })
    }

    static fillSignUpForm(userName,passWord){

        //Sign up
        cy.task('log', 'Enter signup credentials')
        let alertText
        cy.get('#signInModal').within(() => {
            cy.get('#sign-username').should('be.visible').wait(500).type(userName)
            cy.get('#sign-password').should('be.visible').wait(500).type(passWord)
            cy.get('.modal-footer').within(() => {
                cy.on('window:alert',(text)=>{
                    //expect(txt).to.equal('Sign up successful.')
                    alertText = text
                })
                cy.get('[class="btn btn-primary"]').click({ force: true})
                cy.task('log', 'alertText')
                cy.task('log', alertText)
                
            })
        })
    }

    
}
