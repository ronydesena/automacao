import global from '../support/GlobalFunctions'
import paginaProduto from '../support/modules/páginaProduto'
import home from '../support/modules/home'

describe('Página de Produto', () => {

    global.IgnoreJSErros()

    context('Ao entrar na página de produto', () => {
        it('todos os elementos devem carregarar corretamente', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
        })
    })

    context('Quando inserir um cep válido na página de produto', () => {
        it('O sistema deve retornar o valor da entrega', () => {
            home.go()
           
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.inserirCepValido()
        })
    })

    context('Quando inserir um cep inválido com 8 números na página de produto', () => {
        it('O sistema deve retornar que o endereço não foi encontrado', () => {
            home.go()
           
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.inseirirCepInvalido8Digitos()
        })
    })

    context('Quando inserir um cep inválido menor que 8 números na página de produto', () => {
        it('O sistema não retorna informações', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.inserirCepInvalidoCepMenos8Digitos()
        })
    })

    context('Quando clicar no botão comprar', () => {
        it('O produto deve ser adicionado no carrinho', () => {
            home.go()
           
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
        })
    })
})