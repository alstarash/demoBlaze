/// <reference types="cypress"/>

const {C1001, C1002 } = require("./testFlows")


describe('Demoblaze tests',() =>{

    //Use of before each. each test case needs to load the url
    beforeEach(() => {
        //Opens the base url from cypress.json
        cy.visit('/')
    })

    it('Visit home page', () =>{
        //Loads the Home page and validates 
        C1001()
    })

    it('Sign up and Login', () =>{
        //Signup 
        C1002()
    })


})

  