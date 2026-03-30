describe("Contains all possible interactions and flows", () => {
    
    beforeEach(() => {
        cy.visit("https://example.cypress.io/");
    })
    
    it("querying", () => {
        cy.log("Hello World");
        cy.xpath("/html/body/div[3]/div/div/ul/li[1]/ul/li[1]/a").should('have.text',"get");
        cy.xpath('/html/body/div[3]/div/div/ul/li[1]/ul/li[1]/a').click();
        cy.get('#query-btn').should('contain',"Button").and('have.attr',"id");
        cy.get('#query-btn').click();

        cy.go('back');
        cy.contains('contains').click();
        cy.get('.query-list').contains('apples').should('have.text',"apples");
        
        cy.go('back');
        cy.xpath('/html/body/div[3]/div/div/ul/li[1]/ul/li[3]/a').click();
        cy.get('.query-form').within(() => {
            cy.get('#inputEmail').should('have.attr','placeholder',"Email");
            cy.get('#inputEmail').type("blabla@cypress.com");
            cy.get('#inputEmail').should('have.value', "blabla@cypress.com");

        })
    })

    it("actions", () => {
        cy.xpath("/html/body/div[3]/div/div/ul/li[3]/ul/li[1]/a").click();
        cy.get('#description').type("This text should be cleared");
        cy.get('#description').should('have.value',"This text should be cleared");
        cy.get('#description').clear();
        cy.get('#description').should('be.empty');
        cy.get('#description').should('have.value', '');

        cy.get('.action-div').dblclick();
        cy.get('.action-input-hidden').should('be.visible');
        cy.get('.action-input-hidden').clear();
        cy.get('.action-input-hidden').type("bla bla");
        cy.get('.action-input-hidden').should('have.value', "bla bla");

        cy.get('.rightclick-action-div').rightclick();
        cy.get('.rightclick-action-input-hidden').should('be.visible');

        cy.xpath('//*[@id="actions"]/div/div[26]/div/div[1]/div[1]/label/input').check();
        cy.xpath('//*[@id="actions"]/div/div[26]/div/div[1]/div[1]/label/input').should('be.checked');
        cy.xpath('//*[@id="actions"]/div/div[26]/div/div[1]/div[1]/label/input').uncheck();
        cy.xpath('//*[@id="actions"]/div/div[26]/div/div[1]/div[1]/label/input').should('not.be.checked');

        cy.get('.action-select').select('apples');
        cy.get('.action-select').should('have.value', 'fr-apples');

        cy.xpath("//div[@id='scroll-horizontal']/div/button").should('not.be.visible');
        cy.xpath("//div[@id='scroll-horizontal']/div/button").scrollIntoView();
        cy.xpath("//div[@id='scroll-horizontal']/div/button").should('be.visible');

        cy.scrollTo('bottom');

        cy.go('back');
        cy.url().should('eq', 'https://example.cypress.io/')

    })

    it('assertions', () => {
        expect(true).to.be.true;
        cy.xpath('/html/body/div[3]/div/div/ul/li[8]/a').click();
        cy.get('.assertions-link')
            .should('have.attr', 'href')
            .and('include', 'cypress.io');
    })
} )