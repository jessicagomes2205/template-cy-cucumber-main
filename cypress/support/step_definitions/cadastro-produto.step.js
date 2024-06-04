import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(`que eu esteja na tela de cadastro de produtos`, () => {
  cy.fixture('usuario_admin').then((usuario) => {
    cy.login(usuario.email, usuario.senha);
  });
});

When(
  `eu inseir {string}, {int}, {string}, {int}`,
  (nome, preco, descricao, quantidade) => {
    let nomeProduto = `${nome}-${Date.now()}`;
    cy.cadastrarProduto(nomeProduto, preco, descricao, quantidade);
  }
);

Then(`deve validar o {string} do produto na lista`, (nome) => {
  cy.get('.jumbotron').should('contain', nome);
});
