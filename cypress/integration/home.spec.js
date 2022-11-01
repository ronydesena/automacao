import global from '../support/GlobalFunctions'
import home from '../support/modules/home'


describe('Home', () => {

  global.IgnoreJSErros()

  context('Quando entrar na home do site', () => {
    it('todos os elementos carregaram corretamente', () => {
      home.go()

      home.header.verificarImagemLogo()
      home.header.verificarMenu()
      home.header.verificarInputSearch()
      home.header.verificarBotaoLocalizacao()
      home.header.verificarBotaoMeusPedidos()
      home.header.verificarBotaoLogin()
      home.header.verificarBotaoMinicart()

      home.verifyMainBanner()

      home.shelf.verificarTitulo()
      home.shelf.verificarPreço()
      home.shelf.verificarImagem()
      home.shelf.verificarBotaoComprar()
    })
  })

  context('Quando acessar a funcionalidade de Localização', () => {
    it('o sistema deve verificar em Localização se não aceita cep Inválido', () => {
      home.go()
      home.scroll(5000)
      home.header.inserirCepInvalido()
    })


    it('o sistema deve verificar em Localização se aceita cep válido', () => {
      home.go()
      home.scroll(5000)
      home.header.inserircepValido()
    })


    it('o sistema deve verificar se ele volta para o modal inicial ao clicar em "Esta não é Minha Localização', () => {
      home.go()
      home.scroll(5000)
      home.header.voltarModal()
    })
  })

  context('Quando acessar a Newsletter', () => {
    it('Clicar no botão cadastrar sem digitar os campos, o sistema deve exibir mensagem de obrigatoriedade', () => {
      home.go()
      home.scroll(5000)
      home.verificarCamposVazios()
    })

    it('Clicar no botão cadastrar sem digitar o campo nome, o sistema deve exibir mensagem de obrigatoriedade', () => {
      home.go()
      home.scroll(5000)
      home.verificarNomeVazio()
    })

    it('Clicar no botão cadastrar sem digitar o campo email, o sistema deve exibir mensagem de obrigatoriedade', () => {
      home.go()
      home.scroll(5000)
      home.verificarEmailVazio()
    })

    it('Clicar no botão cadastrar digitando email inválido, o sistema deve exibir uma mensagem informando ao usuário', () => {
      home.go()
      home.scroll(5000)
      home.verificarEmailInvalido()
    })

    it('Clicar no botão cadastrar digitando nome e email validos, o sistema deve cadastrar o usuário com sucesso', () => {
      home.go()
      home.scroll(5000)
      home.cadastrarCamposValidos()
    })
  })

})
