describe("C4GT Mentoring Program Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/c4gt23/mentoringProgram");
    });
  
    it("should display the header correctly", () => {
      cy.get("h1").should("contain", "Projects");
      cy.get("p").should("contain", "C4GT 2023 brings to you some key products");
      cy.get("a").should("contain", "View on GitHub");
    });
   
    it("should search for a project", () => {
      cy.get("input[type='text']").type("Javascript");
      cy.get("button").contains("Search").click();
      cy.get(".product-card").should("have.length", 7);
      cy.get(".product-card").each((card) => {
        cy.wrap(card).find("span").contains("Javascript");
      });
    });
    
  
    it("should filter projects by tech stack", () => {
      cy.get("button").contains("Javascript").click();
      cy.get(".product-card").should("have.length", 7);
      cy.get(".product-card").each((card) => {
        cy.wrap(card).find("span").contains("Javascript");
      });
      cy.get("button").contains("All").click();
      cy.get(".product-card").should("have.length.greaterThan", 1);
    });
  });
  