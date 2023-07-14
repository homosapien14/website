describe("HomeHeader Component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("should display the header content correctly", () => {
      cy.get(".font-bold").should("have.text", "Your code can impact millions");
      cy.contains(
        "Code for GovTech (C4GT) is a unique program aimed at creating India's first active open-source community of coders that can build and contribute to global Digital Public Goods."
      );
      cy.contains("Digital Public Goods")
        .should("have.attr", "href", "https://www.codeforgovtech.in/digital-public-goods")
        .should("have.class", "text-white");
      cy.contains(
        "To ensure sustainable adoption of DPGs, building an open source community of vibrant young coders is key!"
      );
      cy.contains(
        "If you want to use technology to create large scale impact, then this is the opportunity for you. Read ahead to know more!"
      );
    });
  
  });
  