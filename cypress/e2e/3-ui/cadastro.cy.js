/// <reference types="cypress" />
const faker = require('faker-br');

describe('Funcionalidade: Cadastro', () => {

beforeEach(() => {
    cy.visit('cadastrar')
});

    it('Cadastro com sucesso', () => {
        let nome = 'Fábio ' + faker.name.lastName()
        let email = faker.internet.email(nome)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123')
        cy.get('[data-test="register-submit"]').click()
        cy.get('.large').should('contain' , 'Dashboard')
        cy.contains(nome).should('exist')
    });

    it('Deve validar mensagem quando cadastrar com email repetido', () => {
        let email = faker.internet.email()
        cy.cadastro('Thiago', email, 'teste@123', 'teste@123')
        cy.get('[data-test="navbar-logout"]').click() //logout
        cy.cadastro('Thiago', email, 'teste@123', 'teste@123')
        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
        
    });



    

});


/* 
Funcionalidade: Cadastro 

Cenário: Cadastro com sucesso
Dado que eu esteja na tela de cadastro
Quando  Eu preencher os campos obrigatórios
Então deve direcionar para o dashboard

Cenário: cadastro com pessoa jurídica

Cenário: Cadastro com email inválido

*/

    /* 
    Hooks:
        Before ( antes de todos os cenários)
        visit 
        login
        input de dados
        criar um banco

        Before Each ( Antes de cada cenário)
        visit ()

        After ( depois de todos os cenários)
        matar um banco

        After Each ( depois de cada cenário)
        gerar um screeshot()
    */