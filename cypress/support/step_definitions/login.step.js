import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(`que eu esteja na tela de login do serverest`, () => {
  cy.visit('login');
});

When(`eu inserir email e senha corretamente`, () => {
  cy.login('jessica_teste@gamil.com', '123456');
});

Then(`deve direcionar para o dashboard`, () => {
  cy.get('h1').should('contain', 'Bem Vindo');
});

When(`eu inserir email: {string} e senha : {string}`, (email, senha) => {
  cy.login(email, senha);
});

Then(`deve exibir uma mensagem de erro`, () => {
  cy.get('.alert').should('contain', 'Email e/ou senha inválidos');
});

When(`eu inserir {string} e {string}`, (email, senha) => {
  cy.login(email, senha);
});
