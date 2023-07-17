describe('Page components render Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/digitalPublicGoods')
    })
  
    it('should display the correct title', () => {
      cy.title().should('contain', 'Digital Public Goods | Code for GovTech')
    })
  
    it('should have a visible navbar', () => {
      cy.get('.justify-between').should('be.visible')
    })
  
    it('should contain a specific text', () => {
      cy.contains('What are Digital Public Goods?')
    })
  })