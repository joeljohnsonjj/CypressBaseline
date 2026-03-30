describe('regresAPI Testing', () => {

    it('Basic GET Request', () => {
        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users/2"
        })
        .then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Basic POST Request', () => {
        cy.request({
            method: 'POST',
            url: "https://reqres.in/api/users",
            body : {
                "name": "Alice Johnson",
                "job": "Software Engineer"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Basic PUT Request', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/87',
            body: {
                "name": "joel",
                "job": "johnson"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Basic DELETE Request', () => {
        cy.request({
            method: 'DELETE',
            url: "https://reqres.in/api/users/2"
        })
        .then((response) => {
            expect(response.status).to.eq(204);
        });
    });

    it('Validate Response', () => {
        cy.request({
            method: 'GET',
            url: `https://reqres.in/api/users/2`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.id).to.eq(2);
            expect(response.body.data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
        });
    })

});