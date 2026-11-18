# Casos de teste — Catálogo

**Pré-condição** — Servidor iniciado com `npm start`. Para cada teste manual, abra ou recarregue [o catálogo](http://127.0.0.1:3000).

## Testes manuais

| ID | Cenário | Passos | Resultado esperado | Resultado observado |
|---|---|---|---|---|
| CT-01 | Filtrar por Papelaria | 1. Abra o catálogo e confira Caderno e Caneca. 2. Clique em **Papelaria**. | A lista contém somente Caderno. | A preencher |
| CT-02 | Consultar categoria vazia | 1. Abra o catálogo. 2. Clique em **Eletrônicos**. | A lista fica vazia e aparece a mensagem “Nenhum produto encontrado.” | A preencher |
| CT-03 | Voltar à lista completa | 1. Clique em **Papelaria**. 2. Clique em **Todos**. | Caderno e Caneca voltam à lista. | A preencher |

CT-01 e CT-02 também estão automatizados em `cypress/e2e/catalogo.cy.js`. CT-03 fica como exercício manual.

## Testes de API

Use `cypress/e2e/api.cy.js` ou envie as requisições por um cliente HTTP.

| ID | Método e rota | Resultado esperado | Resultado observado |
|---|---|---|---|
| API-01 | `GET /api/produtos` | HTTP 200. O JSON contém Caderno e Caneca. | A preencher |
| API-02 | `GET /api/produtos?categoria=inexistente` | HTTP 400. O JSON contém `{"erro":"Categoria inválida"}`. | A preencher |

## Registro da execução

**todos** - passou, realmente apareceu todos(caderno, caneca)
**papelaria** - passou, apareceu somente caderno
**casa** - passou, apareceu somente caneca
**eletronicos** - passou, nenhum produto encontrado e realmente nao tinha nenhum
