/// <reference types="cypress" />

describe('Funcionalidade: Login com cucumber sem plugin', () => {
    context('Dado que estou na página de login', () => {
        before(() => {
            cy.visit('login')
        });

        context('Quando eu inserir usuário e senha', () => {
            beforeEach(() => {
                cy.login('Ivani.Melo99@live.com', 'teste@123')
            });
            it('Então deve exibir a mensagem de boas vindas no dashboard', () => {
                cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
            });
        });
    });

});

/* 
Funcionalidade: Login
*** alguem aqui nunca viu o Gherkin - BDD? ****

Cenário: Login com sucesso
    Dado que estou na página de login
    Quando eu inserir usuário e senha
    Então deve exibir a mensagem de boas vindas no dashboard
*/