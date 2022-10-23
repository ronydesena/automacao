import global from '../support/GlobalFunctions'
import paginaProduto from '../support/modules/páginaProduto'
import carrinho from '../support/modules/carrinho'
import home from '../support/modules/home'

describe('Carrinho', () => {

    global.IgnoreJSErros()

    context('Quando acessar o carrinho e aumentar a quantidade de produtos', () => {
        it('o valor deve ser alterado', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.aumentarQuantidade()
        })
    })

    context('Quando acessar o carrinho e diminuir a quantidade de produtos', () => {
        it('o valor deve ser alterado', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.aumentarQuantidade()
            carrinho.diminuirQuantidade()
        })
    })

    context('Quando acessar o carrinho e clicar remover produtos', () => {
        it('o produto deve ser retirado do carrinho', () => {
            home.go()

            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.checarRemocao()
        })
    })

    context('Quando acessar o carrinho e clicar em comprar', () => {
        it('o produto deve ser levado ao checkout', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()
        })
    })
    
})