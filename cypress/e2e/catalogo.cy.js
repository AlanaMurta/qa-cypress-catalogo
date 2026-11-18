describe('Catálogo de produtos', () => {
  it('CT-01 filtra os produtos por Papelaria', () => {
    cy.visit('/')
    cy.get('[data-cy="produtos"] li').should('have.length', 2)

    cy.contains('button', 'Papelaria').click()

    cy.get('[data-cy="produtos"] li')
      .should('have.length', 1)
      .and('have.text', 'Caneca')
  })

  it('CT-02 mostra uma mensagem quando a categoria está vazia', () => {
    cy.visit('/')
    cy.contains('button', 'Eletrônicos').click()

    cy.get('[data-cy="mensagem"]')
      .should('be.visible')
      .and('have.text', 'Nenhum produto encontrado.')
    cy.get('[data-cy="produtos"]').should('be.empty')
  })
})
