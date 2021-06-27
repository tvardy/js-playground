describe('Home Page', () => {
  before(() => {
    cy.visit('/')
  })

  it('successfully loads desired page', () => {
    cy.title().should('equal', 'JS Playground')
  })
})
