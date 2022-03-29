import { el } from './elements'
import header from '../../components/header/index'


class HomePage {

  constructor() {
    this.header = header
  }

  go() {
    cy.clearCookies()
    cy.setCookie('VtexIdclientAutCookie', 'eyJhbGciOiJFUzI1NiIsImtpZCI6IkUwNjY2N0JDREE0OEY4NjI2NzI0Mjg5MjM5MDMyQUY3NDUxMkJCMzUiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJicnlhbmJyaXRvQGNvZGVieS5jb20uYnIiLCJhY2NvdW50IjoiY29kZWJ5IiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiI5YjgyNWNiMy02ZDM1LTRiYTUtYmNmNi1jMjAyNjQzMmE1NDIiLCJleHAiOjE2NDg2NzA0NTIsInVzZXJJZCI6ImU3NzEzNTk1LWUzMGMtNDUxZi05NjgyLTAyMjM2OTdmNWQxZSIsImlhdCI6MTY0ODU4NDA1MiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6ImQ3MTA2ZjFiLTU3NzYtNGQ2NC04MzdiLTZlZTUyZDE5MjZiMCJ9.EGm_-1AodvVJ-L4JQUQy-LShB5QTKsFG10K2tflKS-Wv4aawpUGBnVxbpZE84ai1FxGWfVMFAuxqCzlKt5Vk_w')

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
