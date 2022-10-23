import { el } from './elements' 

class PaginaProduto {

    escolherProduto() {
        cy.get(el.produto).click({ force: true })
    }

    verificarElementos() {
        cy.get(el.nomeProduto, { timeout: 15000 })
            .should('be.visible')
            .should('have.text', 'Dipirona Sódica 1g 4 Comprimidos ')

        cy.contains(el.preco, '12')
            .should('be.visible')
    }

    inserirCepValido() {
        cy.get(el.cep)
            .type('59215000')
        cy.contains(el.delivery, 'Grátis')
            .should('be.visible')
    }

    inseirirCepInvalido8Digitos() {
        const ceps = [
            '55555555',
            '00000000',
            '56326652',
            '89895656'
        ]

        ceps.forEach(function (c) {
            cy.get(el.cep)
                .type(c)
            cy.get(el.invalidCep)
                .should('have.text', ' Endereço não encontrado')
        })
    }

    inserirCepInvalidoCepMenos8Digitos() {
        const ceps = [
            '1',
            '12',
            '123',
            '1234',
            '12345',
            '123456',
            '1234567'
        ]

        ceps.forEach(function (c) {
            cy.get(el.cep)
                .clear()
                .type(c)
            cy.get(el.invalidCep)
                .should('not.exist')

        })
    }

    adicionarCarrinho(){
        cy.get(el.botaoAdicionarProduto)
            .click()
        cy.get('.vtex-toast')
            .should('have.text', 'Item adicionado ao seu carrinho')
    }

    scroll(positionY) {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })
        cy.scrollTo(0, positionY)
    }

}

export default new PaginaProduto
