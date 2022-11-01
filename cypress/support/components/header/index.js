import { el } from './elements'
import "cypress-real-events/support";


class Header {

  verificarImagemLogo() {
    cy.get(el.imagemLogo)
      .should('be.visible')
  }

  verificarMenu() {
    cy.get(el.botaoMenu)
      .should('be.visible')
  }

  verificarInputSearch() {
    cy.get(el.inputSearch)
      .should('be.visible')
  }

  verificarBotaoLocalizacao() {
    cy.contains(el.botaoLocalizacao, 'Localização')
      .should('be.visible')
  }

  verificarBotaoMeusPedidos() {
    cy.contains(el.botaoMeusPedidos, 'Meus pedidos')
      .should('be.visible')
  }

  verificarBotaoLogin() {
    cy.contains(el.botaoLogin, 'Entrar')
      .should('be.visible')
  }

  verificarBotaoMinicart() {
    cy.contains(el.botaoMinicart, 'Minha cesta')
      .should('be.visible')
  }
}

class Localizacao extends Header {

  inserirCepInvalido() {

    const ceps = [
      '52315471',
      '333333331'
    ]

    cy.contains(el.botaoLocalizacao, 'Localização').click({ force: true })
    ceps.forEach(function (c) {
      cy.get(el.inputModal)
        .clear()
        .type(c)
      cy.get(el.spanError)
        .should('be.visible')
    })
  }

  voltarModal() {
    cy.contains(el.botaoLocalizacao, 'Localização').click({ force: true })
    cy.get(el.tituloLocalizacao).should('have.text', 'Onde você está ?', { timeout: 30000 })
    cy.get(el.inputModal)
      .type('59076400', { force: true })
    cy.get(el.nomeRegiao).should('have.text', 'Avenida Capitão-Mor Gouveia - Natal - RN')
    cy.get(el.naoLocalizacao)
      .click({ force: true })
    cy.get(el.tituloLocalizacao).should('have.text', 'Onde você está ?')
  }

  inserircepValido() {
    cy.contains(el.botaoLocalizacao, 'Localização').click({ force: true })
    cy.get(el.tituloLocalizacao).should('have.text', 'Onde você está ?', { timeout: 30000 })
    cy.get(el.inputModal)
      .type('59076400', { force: true })
    cy.get(el.nomeRegiao).should('have.text', 'Avenida Capitão-Mor Gouveia - Natal - RN')
    cy.get(el.confirmarLocalizacao)
      .click({ force: true })
  }
}

export default new Localizacao
