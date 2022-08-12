/// <reference types="cypress" />

describe('Funcionalidade Cadastro via API', () => {
    it('Deve fazer cadastro com sucesso', () => {

        //var email = "fabio" + Math.floor(Math.random() * 100000) + "@teste.com"
        var email2 = `fabio${Math.floor(Math.random() * 100000)}@teste.com`

        cy.request({
            method: 'POST', 
            url: '/api/users', 
            body: {
                "name": "Fábio Araújo",
                "email": email2,
                "password": "teste@123"
              }
        }).then((response) =>{
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
        })
    });
});
