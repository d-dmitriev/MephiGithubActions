/// <reference types="cypress" />
describe('empty spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000')
    })
    it('Has title', () => {
        cy.get('title').should('have.text', 'Home Page 1')
    })
    it('Has content', () => {
        cy.get('main').should('have.text', 'Hello Gatsby !')
    })
})