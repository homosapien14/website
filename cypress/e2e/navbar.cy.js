describe("Navbar Component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("should display the logo correctly", () => {
      cy.get("#logo").should("be.visible");
      cy.get("#logo").should("have.attr", "src").should("include", "c4gtLogo");
    });
  
    it("should navigate to different pages when links are clicked", () => {
      cy.contains("Home").click();
      cy.url().should("include", "/");
  
      cy.contains("C4GT 2023").click();
      cy.url().should("include", "/c4gt23/mentoringProgram");
  
    });
  
    it("should toggle the mobile menu correctly", () => {
      cy.get(".navbar-menu").should("not.be.visible");
      cy.get(".navbar-burger").click();
      cy.get(".navbar-menu").should("be.visible");
      cy.get(".navbar-burger").click();
      cy.get(".navbar-menu").should("not.be.visible");
    });
  
    it("should display the dropdown menu correctly", () => {
      cy.get(".dropdown-menu").should("not.be.visible");
      cy.get(".dropdown").trigger("mouseover");
      cy.get(".dropdown-menu").should("be.visible");
      cy.get(".dropdown").trigger("mouseout");
      cy.get(".dropdown-menu").should("not.be.visible");
    });
  
    it("should highlight the active link correctly", () => {
      cy.get("a[href='/']").should("not.have.class", "text-red-700");
      cy.contains("Home").click();
      cy.get("a[href='/']").should("have.class", "text-red-700");
  
      cy.get("a[href='/c4gt23/mentoringProgram']").should("not.have.class", "text-red-700");
      cy.contains("C4GT 2023").click();
      cy.get("a[href='/c4gt23/mentoringProgram']").should("have.class", "text-red-700");
  
      cy.get("a[href='/c4gt22']").should("not.have.class", "text-red-700");
      cy.contains("C4GT 2022").click();
      cy.get("a[href='/c4gt22']").should("have.class", "text-red-700");
  
      cy.get("a[href='/digitalPublicGoods']").should("not.have.class", "text-red-700");
      cy.contains("Digital Public Goods").click();
      cy.get("a[href='/digitalPublicGoods']").should("have.class", "text-red-700");
    });
  });
  