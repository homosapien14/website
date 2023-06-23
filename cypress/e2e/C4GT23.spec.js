describe("C4GT Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/C4GT23");
    });
  
    it("should display the header correctly", () => {
      cy.get("h1").should("contain", "Projects");
      cy.get("p").should("contain", "C4GT 2023 brings to you some key products");
      cy.get("a").should("contain", "View on GitHub");
    });
  
    it("should search for a project", () => {
      cy.get("input[type='text']").type("React");
      cy.get("button").contains("Search").click();
      cy.get(".product-card").should("have.length", 1);
      cy.get(".product-card").contains("React");
    });
  
    it("should filter projects by tech stack", () => {
      cy.get("button").contains("React").click();
      cy.get(".product-card").should("have.length", 1);
      cy.get(".product-card").contains("React");
      cy.get("button").contains("All").click();
      cy.get(".product-card").should("have.length.greaterThan", 1);
    });
  });
  