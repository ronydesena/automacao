import { el } from './elements'


class Header {
  verifyImageLogo() {
    cy.get(el.imageLogo)
      .should('be.visible')
  }

  verifyMenu() {
    cy.get(el.buttonMenu)
      .should('be.visible')
  }

  verifyInputSearch() {
    cy.get(el.inputSearch)
      .should('be.visible')
  }

  verifyButtonLocation() {
    cy.contains(el.buttonLocation, 'Localização')
      .should('be.visible')
  }

  verifyButtonMyRequests() {
    cy.contains(el.buttonMyRequests, 'Meus pedidos')
      .should('be.visible')
  }

  verifyButtonLogin() {
    cy.contains(el.buttonLogin, 'Entrar')
      .should('be.visible')
  }

  verifyButtonMyCart() {
    cy.contains(el.buttonMyCart, 'Minha cesta')
      .should('be.visible')
  }
}

export default new Header()
