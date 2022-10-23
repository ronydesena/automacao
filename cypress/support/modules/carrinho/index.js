import { el } from './elements'

class Carrinho {

    go() {
        cy.get(el.botaoCarrinho, { timeout: 30000 })
            .click()
    }

    aumentarQuantidade() {
        cy.get(el.selecaoQuantidade)
            .select('3')
        cy.contains(el.preco, 'R$ 36,00')
    }

    diminuirQuantidade(){
        cy.get(el.selecaoQuantidade)
            .select('2')
        cy.contains(el.preco, 'R$ 24,00')
    }

    checarRemocao() {
        cy.get(el.botaoDeletar)
            .click()
            .should('not.exist')
    }

    addCheckout() {
        cy.get(el.botaoCheckout)
            .click()
        cy.get(el.nomeProduto)
            .should('have.text', 'Dipirona Sódica 1g 4 Comprimidos')
    }

    abrirCarrinho() {
        cy.get(el.botaoCarrinho)
            .click()
    }

}

export default new Carrinho