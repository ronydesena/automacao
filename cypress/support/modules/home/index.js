import { el } from './elements'
import { ck } from '../cookie/elements'
import header from '../../components/header/'
import shelf from '../../components/shelf'


class HomePage {

  constructor() {
    this.header = header
    this.shelf = shelf
  }

  go() {
    cy.clearCookies()
    cy.setCookie(ck.chave, ck.valor)
    cy.lgpdy()
    cy.setSessionStorage()

    cy.visit('/')
    cy.title().should('eq', 'Codeby')
  }

  verifyMainBanner() {
    cy.get(el.sectionMainBanner)
      .last()
      .should('be.visible')
  }
}

class Newsletter extends HomePage {

  scroll(positionY) {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })
    cy.scrollTo(0, positionY)
    cy.wait(3000)
  }

  verificarCamposVazios() {
    cy.get(el.botaoCadastrar)
      .click()

    const campos = [
      { campo: el.errorName, mensagem: 'Nome inválido' },
      { campo: el.errorEmail, mensagem: 'Email inválido' }
    ]

    campos.forEach(function (a) {
      cy.get(a.campo)
        .should('be.visible')
        .should('have.text', a.mensagem)
    })
  }

  verificarEmailInvalido() {
    const emails = [
      '*-@gmail.com',
      '@',
      'gmail.com',
      'maria@',
      '.com',
      '.com.br',
      '@.com.br',
      '@gmail.com.br',
    ]

    cy.get(el.inputNome).type('nome teste')
    emails.forEach(function (c) {
      cy.get(el.inputEmail)
        .clear()
        .type(c)
      cy.get(el.botaoCadastrar)
        .click()
      cy.get(el.errorEmail)
        .should('have.text', 'Email inválido')
    })
  }

  verificarEmailVazio() {
    cy.get(el.inputNome)
      .type('Nome Teste')
    cy.get(el.botaoCadastrar)
      .click()
    cy.get(el.errorEmail)
      .should('have.text', 'Email inválido')
  }

  verificarNomeVazio() {
    cy.get(el.inputEmail)
      .type('teste@teste.com.br')
    cy.get(el.botaoCadastrar)
      .click()
    cy.get(el.errorName)
      .should('have.text', 'Nome inválido')
  }

  cadastrarCamposValidos() {
    cy.get(el.inputNome)
      .type('Teste')
    cy.get(el.inputEmail)
      .type('teste@teste.com.br')
    cy.get(el.botaoCadastrar)
      .click()
    cy.get(el.mensagemSucesso)
      .should('have.text', 'Obrigado!')
  }
}

export default new Newsletter
