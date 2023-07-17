describe('Responsiveness Test', () => {
    
    it('Should test responsiveness for desktop and scrolling', () => {
        cy.visit('http://localhost:3000/digitalPublicGoods')
        cy.viewport(1440, 900)
        cy.get('#footer').scrollIntoView({
            duration: 5000
        })
    })
    it('Should test responsiveness for teblet and scrolling', () => {
        cy.visit('http://localhost:3000/digitalPublicGoods')
        cy.viewport(767, 1024)
        cy.get('#footer').scrollIntoView({
            duration: 5000
        })
    })
    it('Should test responsiveness for mobile and scrolling', () => {
        cy.visit('http://localhost:3000/digitalPublicGoods')
        cy.viewport(414, 736)
        cy.get('#footer').scrollIntoView({
            duration: 5000
        })
    })
    it('Should test collapsed navbar', () => {
        cy.visit('http://localhost:3000/digitalPublicGoods')
        cy.viewport(600, 1024)
        cy.get('.navbar-burger').click()
        cy.get('.flex-col > .group > .block').invoke('show')
    })
})