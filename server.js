const { createServer } = require('node:http')
const { readFileSync } = require('node:fs')
const { join } = require('node:path')

const page = readFileSync(join(__dirname, 'index.html'))
const products = [
  { id: 1, name: 'Caderno', category: 'papelaria' },
  { id: 2, name: 'Caneca', category: 'casa' },
]

createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1:3000')

  if (req.method === 'GET' && url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    return res.end(page)
  }

  if (req.method === 'GET' && url.pathname === '/api/produtos') {
    const category = url.searchParams.get('categoria')
    const categories = ['papelaria', 'casa', 'eletronicos']
    if (category !== null && !categories.includes(category)) {
      res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' })
      return res.end(JSON.stringify({ erro: 'Categoria inválida' }))
    }

    const items = category === null
      ? products
      : products.filter(product => product.category === category)
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    return res.end(JSON.stringify(items))
  }

  res.writeHead(404)
  res.end()
}).listen(3000, '127.0.0.1', () => {
  console.log('Catálogo disponível em http://127.0.0.1:3000')
})
