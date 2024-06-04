# language: pt
Funcionalidade: Login

  Contexto:
    Dado que eu esteja na tela de login do serverest

  @critico @produtos @smoke
  Cenário: Deve fazer login com sucesso
    Quando eu inserir email e senha corretamente
    Então deve direcionar para o dashboard

  Cenário: Deve fazer login com sucesso usando exemplo de dados
    Quando eu inserir email: "jessica_teste@gamil.com" e senha : "123456"
    Então deve direcionar para o dashboard

  @critico @produtos @smoke
  Cenário: Deve validar erro ao fazer login com usuário ou senha invalidos
    Quando eu inserir email: "jessica_teste@gamil.com" e senha : "teste"
    Então deve exibir uma mensagem de erro

  Esquema do Cenário: Deve fazer login com sucesso usando tabela
    Quando eu inserir <email> e <senha>
    Então deve direcionar para o dashboard

    Exemplos:
      | email                     | senha             |
      | "jessica_teste@gamil.com" | "123456"          |
      | "Ruthe_Rempel@yahoo.com"  | "xWmzgGFW7gDeFm3" |
