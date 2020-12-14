export class AddToCart {
    static selectAndAddToCart(product){
        cy.task('log', 'Select the product and add to cart')
        cy.get('#tbodyid').within(() => {
            cy.contains(product).click({ force: true})
        })
        cy.wait(200).then(() => {
            cy.on('window:alert',(txt)=>{
                expect(txt).to.equal('Product added.')
            })
            cy.get('[class="col-sm-12 col-md-6 col-lg-6"]').within(()=>{
                cy.contains('Add').click({ force: true})
            })
        })
    }

    static validateCart(product){
        //Go to cart and validate product is added
        cy.task('log', 'Go to cart and validate product is added')
        cy.get('#navbarExample').within(() => {
            cy.get('#cartur').should('be.visible').wait(500).click({ force: true})
        })
        cy.get('[class="table table-bordered table-hover table-striped"]').within(()=>{
            cy.contains(product)
        })
    }
}
