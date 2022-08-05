/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });
    
    it('Deve fazer login com sucesso', () => {
        cy.login('Ivani.Melo99@live.com', 'teste@123')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('usuario').then((user) => {
            cy.login(user.email, user.senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it.only('Deve fazer login com sucesso - Usando importação de dados', () => {
        cy.login(usuarios[2].usuario, usuarios[2].senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

});