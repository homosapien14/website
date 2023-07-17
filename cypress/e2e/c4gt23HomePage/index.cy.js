describe("C4GT 2023 Page title test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/c4gt23");
    });

    it("should display the title correctly", () => {
        cy.title().should('eq', 'C4GT 2023 | Code for GovTech')
    });
});

describe("C4GT 2023 Home Page components render test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/c4gt23");
    });

    it("should display the parent container", () => {
        cy.get('.c4gt23-container').then(($el) => {
            Cypress.dom.isVisible($el);
        });
    });

    it("should display the header section correctly", () => {
        cy.get("h2").should("contain", "Highlights from 2023");
        cy.get("p").should("contain", "The second edition of the C4GT Mentoring Program was launched on 1st April 2023. The goal was to scale up this year");
    });
});
