import { el } from './elements'
import header from '../../components/header'
import shelf from '../../components/shelf'


class HomePage {

  constructor() {
    this.header = header
    this.shelf = shelf
  }

  go() {
    cy.clearCookies()
    cy.setCookie('VtexIdclientAutCookie', 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjI2RDRFOEIwN0E0MjQyRjlEMkVBRUYzODU4OEZCMkQ1QTQ4RTg4QTEiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJicnlhbmJyaXRvQGNvZGVieS5jb20uYnIiLCJhY2NvdW50IjoiY29kZWJ5IiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiI2ZjVhYTE2NS00MDc2LTQxMzgtODU5YS0yNzVhMjQ0ODYwMWIiLCJleHAiOjE2NDg5MTY1NDcsInVzZXJJZCI6ImU3NzEzNTk1LWUzMGMtNDUxZi05NjgyLTAyMjM2OTdmNWQxZSIsImlhdCI6MTY0ODgzMDE0NywiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6ImY4YmNkNzI1LTUyOGQtNDg2MS1hNzgyLWNhOWUzYTMwODEyYSJ9.MO_PMDYyNOwUwg4cPb_bwVkUrBuIe5qVnaq3wTgzf1SrTWTS2M82Vy8poW9HWbCCTRfVU5V-3sAAlzfOBHEvog')
    cy.lgpdy()
    cy.setSessionStorage()

    cy.visit('/')
  }

  verifyMainBanner() {
    cy.get(el.sectionMainBanner)
      .last()
      .should('be.visible')
  }

  closeCookies() {
    cy.setCookie('OptanonAlertBoxClosed', new Date().toString())
  }

}

export default new HomePage
