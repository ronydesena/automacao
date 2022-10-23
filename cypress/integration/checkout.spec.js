import checkout from '../support/modules/checkout'
import paginaProduto from '../support/modules/páginaProduto'
import global from '../support/GlobalFunctions'
import carrinho from '../support/modules/carrinho'
import home from '../support/modules/home'
import signupFactory from '../factories/SignupFactory'

describe('Checkout', () => {

    global.IgnoreJSErros()


    context('Ao clicar no X no checkout', () => {
        it('o produto deve ser removido', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.removerProduto()
            checkout.verificarCheckoutVazio()
        })
    })

    context('Ao clicar no botão +', () => {
        it('a quantidade de produto deve ser aumentada no checkout', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.incrementarItem()
            checkout.verificarQuantidadeItem(2)
        })
    })

    context('Ao clicar no -', () => {
        it('a quantidade deve ser diminuida no checkout', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.incrementarItem()
            checkout.verificarQuantidadeItem(2)
            checkout.decrementarItem()
            checkout.verificarQuantidadeItem(1)
        })
    })

    context('Ao tentar ir para entrega sem digitar todos os campos de dados pessoais', () => {
        it('o sistema deve apresentar a mensagem de campo obrigatório', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()
            checkout.enviarDadosPessoais()
            checkout.erroCamposPessoaisObrigatorios()
        })
    })

    context('Ao tentar preencher o campo CPF com valor inválido', () => {
        it('o sistema informa que existe um erro no documento', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()
            checkout.enviarDadosPessoais()
            checkout.inserirCpfInvalido()
        })
    })

    context('Ao tentar preencher o campo telefone com valor inválido', () => {
        it('o sistema informa que existe um erro no número', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()
            checkout.enviarDadosPessoais()
            checkout.inserirTelefoneInvalido()
        })
    })

    context('Ao tentar preencher o campo email com valor inválido', () => {
        it('o sistema solcita que o usuário informe um e-mail válido', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()
            checkout.enviarDadosPessoais()
            checkout.inserirEmailInvalido()
        })
    })

    context('Ao preencher o campo cep com valor inválido no checkout', () => {
        it('o sistema não deixa prosseguir com a compra', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()

            const usuario = signupFactory.user()

            checkout.inserirInputEmail(usuario)
            checkout.inserirInputNome(usuario)
            checkout.inserirInputSobrenome(usuario)
            checkout.inserirInputCpf(usuario)
            checkout.inserirTelefoneInput(usuario)
            checkout.enviarDadosPessoais()

            checkout.inserirCepInvalido()
        })
    })
    
    context('Ao tentar cadastrar a entrega sem o número da casa', () => {
        it('o sistema não deixa prosseguir para o pagamento', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()

            const usuario = signupFactory.user()

            checkout.inserirInputEmail(usuario)
            checkout.inserirInputNome(usuario)
            checkout.inserirInputSobrenome(usuario)
            checkout.inserirInputCpf(usuario)
            checkout.inserirTelefoneInput(usuario)
            checkout.enviarDadosPessoais()

            checkout.inserirCepInput(usuario)
            checkout.irParaPagamento()
            checkout.entrarNumeroCasa()
        })
    })

    context('Ao acessar o checkout', () => {
        it('Todas as formas de pagamento devem está disponíveis', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()

            const usuario = signupFactory.user()

            checkout.inserirInputEmail(usuario)
            checkout.inserirInputNome(usuario)
            checkout.inserirInputSobrenome(usuario)
            checkout.inserirInputCpf(usuario)
            checkout.inserirTelefoneInput(usuario)
            checkout.enviarDadosPessoais()
            
            checkout.inserirCepInput(usuario)
            checkout.entrarNumeroCasaValido(usuario)
            checkout.inputComplemento(usuario)
            checkout.irParaPagamento()

            checkout.validarFormasdePagamento()      
        })
    })

    context('Ao acessar o checkout', () => {
        it('deve ser possível realizar compra com cartão de débito', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()

            const usuario = signupFactory.user()

            checkout.inserirInputEmail(usuario)
            checkout.inserirInputNome(usuario)
            checkout.inserirInputSobrenome(usuario)
            checkout.inserirInputCpf(usuario)
            checkout.inserirTelefoneInput(usuario)
            checkout.enviarDadosPessoais()
            
            checkout.inserirCepInput(usuario)
            checkout.entrarNumeroCasaValido(usuario)
            checkout.inputComplemento(usuario)
            checkout.irParaPagamento()

            checkout.realizarPagamentoDebito(usuario) 
        })
    })

    context('Ao acessar o checkout digitando numero de cartão de débito inválido', () => {
        it('o sistema deve bloquear a compra', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()

            const usuario = signupFactory.user()

            checkout.inserirInputEmail(usuario)
            checkout.inserirInputNome(usuario)
            checkout.inserirInputSobrenome(usuario)
            checkout.inserirInputCpf(usuario)
            checkout.inserirTelefoneInput(usuario)
            checkout.enviarDadosPessoais()
            
            checkout.inserirCepInput(usuario)
            checkout.entrarNumeroCasaValido(usuario)
            checkout.inserirInputComplemento(usuario)
            checkout.irParaPagamento()

            checkout.inserirCartaoInvalido()
        })
    })

    context('Ao acessar o checkout', () => {
        it('O usuário deverá ser capaz de realizar uma compra com cartão de crédito', () => {
            home.go()
            
            paginaProduto.escolherProduto()
            paginaProduto.verificarElementos()
            paginaProduto.adicionarCarrinho()
            
            carrinho.go()
            carrinho.addCheckout()

            checkout.verificarProdutosCheckout()
            checkout.finalizarCompra()

            const usuario = signupFactory.user()

            checkout.inserirInputEmail(usuario)
            checkout.inserirInputNome(usuario)
            checkout.inserirInputSobrenome(usuario)
            checkout.inserirInputCpf(usuario)
            checkout.inserirTelefoneInput(usuario)
            checkout.enviarDadosPessoais()
            
            checkout.inserirCepInput(usuario)
            checkout.entrarNumeroCasaValido(usuario)
            checkout.inserirInputComplemento(usuario)
            checkout.irParaPagamento()

            checkout.inserirCartaoValido(usuario)
            
        })
    })
})