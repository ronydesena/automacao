import global from '../support/GlobalFunctions'
import home from '../support/modules/home'
import search from '../support/modules/search'

describe('Search', () => {

    global.IgnoreJSErros()

    context('Quando digitar um produto inválido no input de search', () => {
        it('O sistema deve retornar que nenhum produto foi encontado', () => {
            home.go()
            
            search.buscarProdutoInvalido()
        })
    })

    context('Quando digitar um produto válido no input de search', () => {
        it('o sistema deve retornar uma search page com o produto encontrado', () => {
            home.go()
           
            search.buscarProdutoValido()
        })
    })

    
    context('Quando acessar a search page e selecionar o filtro de Fabricante', () => {
        it('o sistema deve retornar uma search page com o produtos específicos', () => {
            home.go()
           
            search.buscarProdutoValido()
            search.filtrarFabricante()
        })
    })

     
    context('Quando acessar a search page e selecionar o filtro de Categoria', () => {
        it('o sistema deve retornar uma search page com o produtos específicos', () => {
            home.go()
           
            search.buscarProdutoValido()
            search.filtrarCategoria()
        })
    })

    context('Quando acessar a search page e selecionar o filtro de Forma', () => {
        it('o sistema deve retornar uma search page com o produtos específicos', () => {
            home.go()
           
            search.buscarProdutoValido()
            search.filtrarForma()
        })
    })

    context('Quando acessar a search page e selecionar o filtro de Marca', () => {
        it('o sistema deve retornar uma search page com o produtos específicos', () => {
            home.go()
           
            search.buscarProdutoValido()
            search.scroll(500)
            search.filtrarMarca()
        })
    })

    context('Quando acessar a search page e selecionar o filtro de Subcategoria', () => {
        it('o sistema deve retornar uma search page com o produtos específicos', () => {
            home.go()
           
            search.buscarProdutoValido()
            search.scroll(500)
            search.filtrarSubcategoria()
        })
    })
})