# language: pt
Funcionalidade: Cadastro de produtos
            Eu como admin do sistema serverest
            Quero cadastrar produtos
            Para ter um estoque

  @critico @produtos @smoke
  Cenário: Cadastro de produtos com sucesso
    Dado que eu esteja na tela de cadastro de produtos
    Quando eu inseir <nome>, <preco>, <descricao>, <quantidade>
    Então deve validar o <nome> do produto na lista

    Exemplos:
      | nome        | preco | descricao          | quantidade |
      | "Monitor 1" |  1325 | "Monitor de Vídeo" |         50 |
      | "Monitor 2" |  1457 | "Monitor de Vídeo" |        150 |
      | "Monitor 3" |  3247 | "Monitor de Vídeo" |         80 |
