import { el } from './elements'


class Shelf {
  verificarTitulo() {
    cy.get(el.tituloShelf)
      .should('be.visible')
  }

  verificarPreço() {
    cy.get(el.precoShelf)
      .should('be.visible')
  }

  verificarImagem() {
    cy.get(el.imagemShelf)
      .should('be.visible')
  }

  verificarBotaoComprar() {
    cy.get(el.botaoComprar)
      .should('be.visible')
  }
}

export default new Shelf()
