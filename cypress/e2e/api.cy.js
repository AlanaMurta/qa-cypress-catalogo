describe('API de produtos', () => {
  it('API-01 retorna a lista esperada com status 200', () => {
    cy.request('GET', '/api/produtos').then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.map(product => product.name)).to.deep.equal(['Caderno', 'Caneca'])
    })
  })

  it('API-02 rejeita uma categoria desconhecida com status 400', () => {
    cy.request({
      method: 'GET',
      url: '/api/produtos?categoria=inexistente',
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.eq(400)
      expect(body.erro).to.eq('Categoria inválida')
    })
  })
})
