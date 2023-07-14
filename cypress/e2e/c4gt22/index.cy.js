describe("C4GT 2022 Page components render test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/c4gt22");
  });

  it("should display the parent container", () => {
    cy.get('.c4gt22-container').then(($el) => {
      Cypress.dom.isVisible($el);
    });
  });

  it("should display the header section correctly", () => {
    cy.get("h2").should("contain", "Highlights from 2022");
    cy.get("p").should("contain", "Code for GovTech (C4GT) was launched in May 2022, as an ecosystem-led");
    cy.get("span").should("contain", "Here are some of the key highlights from 2022.");
  });
});
