describe('testing simplelife navbar', () => {
  it('Successfull load', () => {//pour testet petit bout par petit bout
    cy.visit('/')
  })
  it('Should carractere ', () => {
    cy.visit('/Accueil')
    cy.contains('Accueil').should('exist')
    cy.contains('Commencer').should('exist')
    cy.contains('listes').should('exist')
  })
})