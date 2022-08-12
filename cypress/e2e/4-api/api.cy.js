describe('Teste de API', () => {
    
    var dojo = {
        aula: "API",
        duracao: 3, 
        professor: "Fábio"
    }

    var numero = [0, 2, 4, 6, 8, 10]

    var usuarios = [
        {
            "usuario": "Ivani.Melo99@live.com",
            "senha": "teste@123"
        },
        {
            "usuario": "fabio.Melo38@live.com",
            "senha": "teste@123", 
            "perfil": "admin"
        },
        {
            "usuario": "joão.silva@live.com",
            "senha": "teste@123"
        }
    
    ]

it('Teste Dojo ', () => {
    expect(dojo.aula).to.equal("API")
    expect(dojo.duracao).to.equal(3)
    expect(dojo.professor).contains("Fáb")
});

it('Teste usuario', () => {
    expect(usuarios[0].usuario).to.contains("Ivani")
    cy.log(usuarios[1].perfil)
});

});