
export class HomePage {

    static validateLandingPage() {
        //Asserts site logo is present
        cy.task('log', 'Demoblaze landing page validation')
        cy.get('#narvbarx').within(() => {
            cy.get('[class="navbar-brand"]').should('be.visible')
        })

     }



}