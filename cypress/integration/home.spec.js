import global from '../support/GlobalFunctions'
import home from '../support/pages/home'


describe('Home', () => {

  global.IgnoreJSErros()

  context('Quando entrar na home do site', () => {
    it('Deve verificar se todos os elementos carregaram corretamente', () => {
      home.go()
      home.closeCookies()

      home.header.verifyImageLogo()
      home.header.verifyMenu()
      home.header.verifyInputSearch()
      home.header.verifyButtonLocation()
      home.header.verifyButtonMyRequests()
      home.header.verifyButtonLogin()
      home.header.verifyButtonMyCart()

      home.verifyMainBanner()

      home.shelf.verifyTitle()
      home.shelf.verifyPrice()
      home.shelf.verifyImage()
      home.shelf.verifyBuyButton()
      home.shelf.verifySavingsPercentage()
      home.shelf.verifySellingPrice()
    })

  })
})
