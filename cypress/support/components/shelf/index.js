import { el } from './elements'


class Shelf {
  verifyTitle() {
    cy.get(el.titleShelf)
      .should('be.visible')
  }
}


export default new Shelf()
