/// <reference types="cypress"/>

import { HomePage } from "../repository/homePage"
import { SignUp } from "../repository/signUp"
import {Chance} from 'chance'
import { Login } from "../repository/login"
import { AddToCart } from "../repository/addToCart"



export function C1001() {
    cy.task('log', '******************************************Test start******************************************************************')
    //before class loads the page
    //Assert landing page elements
    HomePage.validateLandingPage()
    cy.task('log', '*******************************************Test end******************************************************************')

}

export function C1002() {

    const userName = Chance().string({ length: 10, pool: 'abcdefghijklmnopqrstuvwxyz0123456789' })
    const passWord = Chance().string({ length: 10, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%' })
    const product = 'Samsung galaxy s6'
    cy.task('log', userName)
    cy.task('log', passWord)
    
    SignUp.clickSignUp()
    SignUp.fillSignUpForm(userName,passWord)
    cy.wait(200).then(() => {
        Login.clickLogin()
        Login.fillLoginForm(userName,passWord)
        Login.loginSuccess(userName)
    })
    
    
    cy.task('log', 'Add Samsung galaxy s6 to cart')
    cy.wait(500).then(() =>{
        AddToCart.selectAndAddToCart(product)
        AddToCart.validateCart(product)
    })


    

    
}
