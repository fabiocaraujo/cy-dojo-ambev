/// <reference types = "cypress"/>
import mkPerfis from "../../fixtures/perfis.json"

describe('Funcionalidade: Ver perfis', () => {

    beforeEach(() => {
        cy.visit('perfis')
    }); 

    it('Deve validar o primeiro item da lista ', () => {
        cy.fixture('perfis').then((mockPerfis) => {
            cy.intercept('GET', 'api/profile', {
                statusCode: 200, 
                body: mockPerfis
            }).as('getPerfis')  
        })
        cy.visit('perfis')
        cy.get('[data-test="profile-name"]').first().should('have.text', 'Paulo Guerra' )
    });

    it.only('Deve vlaidar o ultimo item da lista', () => {
        cy.intercept({
            method: 'GET',
            url: 'api/profile',
          }, {
            statusCode: 200,
            body: mkPerfis
          }).as('getPerfis')

          cy.visit('perfis')

        cy.get('[data-test="profile-name"]').last().should('have.text', 'Thiago de Souza')
    });

    it('Deve vlaidar o terceiro item da lista', () => {
        cy.get('[data-test="profile-name"]').eq(2).should('have.text', 'Pa Sun')
    });
});