/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Sugeng Prastiyo')
        cy.get('[placeholder ="Email"][type="text"]').type('sugengprsty5@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('sugengprsty5@gmail.com')
        cy.get('#inputPassword2').type('Sugengggg')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('Sugengprsty5@gmail.com')
        cy.get('#exampleInputPassword1').type('Sugengggg')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Sugeng Prastiyo')
        cy.get('[placeholder="Subject"]').type('Tugas BlackBoxTesting')
        cy.get('[placeholder="Message"').type('Ayo Selamat Mengerjakan')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Sugeng')
        cy.get('#inputLastName').type('Prastiyo')
        cy.get('#inputEmail').type('Sugengprsty5@gmail.com')
        cy.get('#inputWebsite').type('www.Sugengprsty.com')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('Sugengprsty5@gmail.com')
        cy.get('#inputPassword3').type('Sugengggg')
        cy.get('.custom-checkbox').last().click()
    })

});