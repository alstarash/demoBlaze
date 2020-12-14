export class Login {
    static clickLogin(){
        cy.task('log', 'Click on Login')
        cy.get('#narvbarx').within(() => {
            cy.get('#login2').should('be.visible').click({ force: true})
        })
    }

    static fillLoginForm(userName,passWord){

        //Login
        cy.task('log', 'Customer Login')
        cy.get('#logInModal').wait(2000).within(() => {
            cy.get('#loginusername').should('be.visible').type(userName)
            cy.get('#loginpassword').should('be.visible').type(passWord)
            cy.get('.modal-content').within(() =>{
                cy.get('.modal-footer').within(() => {
                    cy.get('[class="btn btn-primary"]').click({ force: true})
                })
            })
            
        })
            
    }

    static loginSuccess(userName){
        cy.task('log', 'Validate Customer Login is successful')
        cy.wait(100).then(() =>{
            cy.get('#nameofuser').should('contain', `Welcome ${userName}`)
    
        })
        }

}
