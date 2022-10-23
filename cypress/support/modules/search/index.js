import { el } from './elements'

class Search {
    buscarProdutoInvalido() {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })
        cy.get(el.inputBusca)
          .type('Inválido', { force: true })
          .type('{enter}')
        cy.contains(el.buscaResultadoInvalido, 'Nenhum produto foi encontrado', {timeout: 10000})
          .should('be.visible')
      }
    
      buscarProdutoValido() {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })
        cy.get(el.inputBusca)
          .type('Comprimidos', { force: true })
          .type('{enter}')
        cy.get(el.buscaResultadoValido, {timeout: 10000})
          .should('be.visible')
      }

    filtrarFabricante() {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })
        cy.get(el.fabricante)
            .click()
            .should('be.checked')
        cy.get(el.breadcrumbs)
            .should('be.visible')
    }

    filtrarCategoria(){
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })
        cy.get(el.category)
            .click()
            .should('be.checked')
        cy.get(el.breadcrumbs)
            .should('be.visible')
    }
}

export default new Search