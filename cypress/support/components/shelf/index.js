import { el } from './elements'


class Shelf {
  verifyTitle() {
    cy.get(el.titleShelf)
      .should('be.visible')
  }

  verifyPrice() {
    cy.get(el.priceShelf)
      .should('be.visible')
  }

  verifyImage() {
    cy.get(el.imageShelf)
      .should('be.visible')
  }

  verifyBuyButton() {
    cy.get(el.buyButtonShelf)
      .should('be.visible')
  }

  verifySavingsPercentage() {
    cy.get(el.savingsPercentage)
      .should('be.visible')
  }

  verifySellingPrice() {
    cy.get(el.sellingPrice)
      .should('be.visible')
  }
}

export default new Shelf()
