// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('cadastro', (nome, email, senha, confirmaSenha) => {
    cy.visit('cadastrar')
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(confirmaSenha)
    cy.get('[data-test="register-submit"]').click()
 })

 Cypress.Commands.add('login', (email, senha) => {
   cy.visit('login')
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
 })

 Cypress.Commands.add('criarPerfil', (cia, site, cidade, skills, github, minibio) => {
   cy.visit('criar-perfil')
   cy.get('#mui-component-select-status').click()
   cy.contains('Especialista em QA').click()
   cy.get('[data-test="profile-company"]').type(cia)
   cy.get('[data-test="profile-webSite"]').type(site)
   cy.get('[data-test="profile-location"]').type(cidade)
   cy.get('[data-test="profile-skills"]').type(skills)
   cy.get('[data-test="profile-gitHub"]').type(github)
   cy.get('[data-test="profile-bio"]').type(minibio)
   cy.get('[data-test="profile-submit"]').click()
 })

 Cypress.Commands.add('gerarToken', (email, senha) => {
  cy.request({
    method: 'POST',
    url: 'api/auth',
    body: {
        "email": email,
        "password": senha
      }
}).then((response) =>{
  return response.body.jwt
})

})




