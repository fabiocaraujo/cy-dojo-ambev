/// <reference types = "cypress"/>

describe('Interceptando requisições', () => {

    beforeEach(() => {
        cy.visit('https://www.ambev.com.br/')
        cy.get('button.age-gate-dialog__answer-button').click()
        cy.wait(3000)
        cy.get('#onetrust-accept-btn-handler').click()
        
    });
    it.only('Deve buscar um termo com sucesso', ( ) => {
/*         cy.intercept('GET', 'https://google.com', {
            statusCode: 500
        }).as('status500')
         */
       
        cy.get('.search-bar__toggle-button').click()
        cy.get('#s').type('qualidade{enter}')

        cy.get('.search-result-group__title').first().should('have.text', 'Sustentabilidade')
    });

    it('Busca erro 404', () => {
        cy.intercept('GET', 'https://google.com', {
                statusCode: 404
            })
        cy.visit('https://google.com')
        cy.get('.container > :nth-child(4)').should('have.text', '404 - Not Found')
    });
});