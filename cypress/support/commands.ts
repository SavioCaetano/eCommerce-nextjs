/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {        
        searchByQuery(query: string): Chainable<void>
    }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
    cy.visit('/')
    cy.get('input[name=q]').type('moletom').parent('form').submit()
})
