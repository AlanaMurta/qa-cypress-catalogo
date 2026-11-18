# Projeto de QA — Catálogo de produtos

Laboratório para praticar testes manuais, automação E2E e testes de API. O catálogo usa dados fictícios e roda localmente com Node.js.

## Rodar no VS Code

1. Extraia o ZIP e abra a pasta `qa-cypress` em **Arquivo → Abrir Pasta**.
2. No terminal integrado, rode `node -v` e `npm -v`. Use Node.js 24 LTS com npm.
3. Na pasta que contém `package.json`, execute `npm ci` para instalar as dependências, depois `npm start`.
4. Abra [http://127.0.0.1:3000](http://127.0.0.1:3000) no navegador e confira se aparecem Caderno e Caneca.
5. Mantenha esse terminal aberto. Abra outro com **Terminal → Novo Terminal** e execute `npm run cy:open`.
6. Na janela do Cypress, selecione **E2E Testing → navegador disponível → Start E2E Testing**. Se aparecer a opção, escolha continuar para os testes existentes. Abra `catalogo.cy.js`.
7. Para rodar os quatro testes pelo terminal, use `npm test` com o servidor ainda aberto.

Caso a instalação termine sem baixar o aplicativo Cypress, rode `npx cypress install`. Se a porta 3000 estiver ocupada, encerre o processo do laboratório que já usa essa porta ou, se for outro serviço conhecido, feche-o quando puder liberá-la.

## Aprender escrevendo o primeiro teste

Abra `cypress/e2e/catalogo.cy.js`. Guarde uma cópia do conteúdo do arquivo em uma aba de rascunho. Escreva este teste no arquivo e execute-o pela janela do Cypress.

```js
describe('Catálogo de produtos', () => {
  it('CT-01 filtra os produtos por Papelaria', () => {
    cy.visit('/')
    cy.get('[data-cy="produtos"] li').should('have.length', 2)

    cy.contains('button', 'Papelaria').click()

    cy.get('[data-cy="produtos"] li')
      .should('have.length', 1)
      .and('have.text', 'Caderno')
  })
})
```

- **Preparar.** Abra o catálogo e confirme que há dois produtos.
- **Agir.** Localize o botão pelo texto e clique.
- **Verificar.** Confirme que restou um item e que seu texto é Caderno.
- **Investigar.** Troque o último `Caderno` por `Caneca`. Salve, observe a falha de asserção e leia o valor esperado e o encontrado. Volte para `Caderno` e confira que passou.
- **Praticar.** Dentro do mesmo `describe`, escreva outro `it` que abre o catálogo, clica em Eletrônicos, confirma a mensagem e verifica a lista vazia. Consulte a cópia do arquivo depois da tentativa.

Cada `it` representa um cenário. `describe` agrupa cenários relacionados. A configuração define `baseUrl`, então `cy.visit('/')` abre a página inicial do servidor local.

## Testar a API

Abra [http://127.0.0.1:3000/api/produtos](http://127.0.0.1:3000/api/produtos) no navegador para ver o JSON. Execute `api.cy.js` no Cypress e compare os cenários com a tabela de [casos de teste](docs/casos-de-teste.md). O Cypress testa a API enviando uma requisição HTTP com `cy.request()`. Cada teste verifica o status e o conteúdo da resposta.

Como exercício, adicione um cenário para `GET /api/produtos?categoria=papelaria`. O status esperado é `200` e o corpo deve conter somente Caderno.

## Conteúdo do projeto

| Arquivo | O que contém |
|---|---|
| [docs/casos-de-teste.md](docs/casos-de-teste.md) | Roteiro manual, cenários de API e registro da execução |
| [cypress/e2e/catalogo.cy.js](cypress/e2e/catalogo.cy.js) | Dois fluxos automatizados pelo navegador |
| [cypress/e2e/api.cy.js](cypress/e2e/api.cy.js) | Dois testes HTTP automatizados |
| [cypress.config.js](cypress.config.js) | Endereço do catálogo usado pelos testes |
| `index.html` e `server.js` | Aplicação e API do laboratório |

## Publicar depois da prática

Crie um repositório vazio chamado `qa-cypress-catalogo` no GitHub. No terminal integrado, na raiz da pasta, rode os comandos. Copie do GitHub a URL do seu repositório para substituir a URL de exemplo.

```bash
git init -b main
git add .
git status
git commit -m "Adiciona laboratório de QA com Cypress"
git remote add origin https://github.com/SEU-USUARIO/qa-cypress-catalogo.git
git push -u origin main
```

Confira no GitHub se aparecem o README, os casos documentados e os arquivos `.cy.js`. Registre os seus resultados reais em `docs/casos-de-teste.md` antes de compartilhar o link. Se registrar novos resultados depois do primeiro envio, faça um novo commit e rode `git push`.

## Como apresentar o projeto

Depois de executar e entender os casos, use suas palavras. Exemplo de apresentação de 30 segundos

> Usei um catálogo local para praticar QA. Documentei os passos e os resultados esperados, executei os casos manualmente e automatizei no Cypress o filtro de Papelaria e a mensagem de lista vazia. Também fiz chamadas diretas à API para verificar a resposta de sucesso e a de categoria inválida.

Sugestão para a seção **Projetos** do currículo, depois de concluir a prática

> Projeto de QA com Cypress — Documentação e execução de testes manuais, automação E2E de fluxos de catálogo e validação de respostas HTTP e JSON. GitHub: [adicione o link].
