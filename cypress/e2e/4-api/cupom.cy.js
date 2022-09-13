describe('teste cupom', () => {
    it('teste 1', () => {
        cy.request({
            method: 'GET',
            url: "http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons?order=asc", 
            headers: { authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy" },
        }).then((response) => {
            cy.log(response.body)
        })
    });
});