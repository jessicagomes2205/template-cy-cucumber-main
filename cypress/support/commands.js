Cypress.Commands.add('login', (email, senha) => {
  cy.visit('login');
  cy.get('[data-testid="email"]').type(email, { log: false });
  cy.get('[data-testid="senha"]').type(senha, { log: false });
  cy.get('[data-testid="entrar"]').click();
  cy.get('h1', { timeout: 10000 }).should('contain', 'Bem Vindo');
});

Cypress.Commands.add(
  'cadastrarProduto',
  (nome, preco, descricao, quantidade) => {
    cy.visit('admin/cadastrarprodutos');
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="preco"]').type(preco);
    cy.get('[data-testid="descricao"]').type(descricao);
    cy.get('[data-testid="quantity"]').type(quantidade);
    cy.get('[data-testid="cadastarProdutos"]').click();
  }
);
