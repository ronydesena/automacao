// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';
import { registerCommand } from 'cypress-wait-for-stable-dom'

registerCommand()


Cypress.Commands.add('lgpdy', function () {
  const payload = {
    "consent": {
      "categories": "",
      "cookies": ""
    }
  }

  cy.request({
    method: 'POST',
    url: 'https://api.lgpdy.com/accounts/30/consents',
    body: payload
  }).then(function (response) {
    expect(response.status).to.eq(200)

    cy.log(response.body)

    const localStorage = {
      categories: [],
      cookies: [],
      date: 1648835320008,
      id: response.body.id
    }

    window.localStorage.setItem("lgpdy_preferences", JSON.stringify(localStorage));

  })
})

Cypress.Commands.add('setSessionStorage', function () {
  window.sessionStorage.setItem('remover-chatbot-iara', 'iaraSuspensa')
  window.sessionStorage.setItem('hasOpenedModal', false)
})
