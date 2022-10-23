import { el } from './elements'

const validIframe = function () {
    return cy
        .get(el.iframeCartao, { timeout: 10000 })
        .its('0.contentDocument.body').should('not.be.empty', { timeout: 10000 })
        .then(cy.wrap)
}

const validIframeDebito = function () {
    return cy
        .get(el.iframeDebito, { timeout: 10000 })
        .its('0.contentDocument.body').should('not.be.empty', { timeout: 10000 })
        .then(cy.wrap)
}

class CheckoutPage {

    verificarProdutosCheckout() {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })

        cy.get(el.produtoCheckout)
            .should('be.visible')
    }

    removerProduto() {
        cy.get(el.botaoRemover).click()
    }

    verificarCheckoutVazio() {
        cy.get(el.tituloCheckout)
            .should('be.visible')
            .should('have.text', 'Seu carrinho está vazio.')
    }

    incrementarItem() {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })

        cy.get(el.incrementarItem)
            .eq(0)
            .click()
    }

    decrementarItem() {
        cy.waitForStableDOM({ pollInterval: 1000, timeout: 30000 })

        cy.get(el.decrementarItem)
            .eq(0)
            .click()
    }

    verificarQuantidadeItem(quantidade) {
        cy.get(el.verificarQuantidadeItem)
            .eq(0)
            .invoke('val')
            .should('eq', quantidade.toString());
    }

    finalizarCompra() {
        cy.get(el.continuarPagamento, { timeout: 20000 })
            .click()
    }

    enviarDadosPessoais() {
        cy.get(el.botaoEnviarDadosPessoais)
            .click()
    }

    erroCamposPessoaisObrigatorios() {
        const campos = [
            { campo: el.erroEmail, mensagem: 'Campo obrigatório.' },
            { campo: el.erroPrimeiroNome, mensagem: 'Campo obrigatório.' },
            { campo: el.erroSobrenome, mensagem: 'Campo obrigatório.' },
            { campo: el.erroCPF, mensagem: 'Campo obrigatório.' },
            { campo: el.erroTelefone, mensagem: 'Campo obrigatório.' }
        ]

        campos.forEach(function (a) {
            cy.get(a.campo)
                .should('be.visible')
                .should('have.text', a.mensagem)
        })
    }

    inserirCpfInvalido() {
        const cpfs = [
            '1',
            '12',
            '123',
            '1234',
            '12345',
            '123456',
            '1234567',
            '12345678',
            '123456789',
            '12345678912',
            '74185296374',
            '45678912358',
            '95175385246',
            '78451296365',
        ]

        cpfs.forEach(function (c) {
            cy.get(el.cpfInput)
                .clear()
                .type(c)
            cy.get(el.botaoEnviarDadosPessoais)
                .click()
            cy.get(el.erroCPF)
                .should('have.text', 'Informe um documento válido.')
        })
    }

    inserirTelefoneInvalido() {
        const telefones = [
            '1',
            '12',
            '123',
            '1234',
            '12345',
            '123456',
            '1234567',
            '12345678',
            '123456789',
            '12345678912',
            '74185296374',
            '45678912358',
            '95175385246',
            '78451296365',
        ]

        telefones.forEach(function (c) {
            cy.get(el.telefoneInput)
                .clear()
                .type(c)
            cy.get(el.botaoEnviarDadosPessoais)
                .click()
            cy.get(el.erroTelefone)
                .should('have.text', 'Informe um número de telefone válido.')
        })
    }

    inserirEmailInvalido() {
        const emails = [
            '@',
            'gmail.com',
            'maria@',
            '*-@gmail.com',
            '.com',
            '.com.br',
            '@.com.br',
            '@gmail.com.br',
        ]

        emails.forEach(function (c) {
            cy.get(el.emailInput)
                .clear()
                .type(c)
            cy.get(el.botaoEnviarDadosPessoais)
                .click()
            cy.get(el.erroEmail)
                .should('have.text', 'Informe um email válido.')
        })
    }


    inserirInputEmail(usuario) {
        cy.get(el.emailInput)
            .clear()
            .type(usuario.email)
            .should('be.visible')
    }

    inserirInputNome(usuario) {
        cy.get(el.nomeInput)
            .clear()
            .type(usuario.nome)
            .should('be.visible')
    }

    inserirInputSobrenome(usuario) {
        cy.get(el.sobrenomeInput)
            .clear()
            .type(usuario.sobrenome)
            .should('be.visible')
    }

    inserirInputCpf(usuario) {
        cy.get(el.cpfInput)
            .clear()
            .type(usuario.cpf)
            .should('be.visible')
    }

    inserirTelefoneInput(usuario) {
        cy.get(el.telefoneInput)
            .clear()
            .type(usuario.telefone)
            .should('be.visible')
    }

    inseirCepInvalido() {

        const ceps = [
            '1',
            '12',
            '123',
            '1234',
            '12345',
            '123450',
            '1234500'
        ]

        ceps.forEach(function (c) {

            cy.get(el.cepInput)
                .clear()
                .type(c)
            cy.get(el.erro)
                .should('be.visible')
        })
    }

    inserirCepInput(user) {
        cy.get(el.cepInput)
            .clear()
            .type(user.endereco.cep)
        cy.get(el.tituloEndereco, { timeout: 15000 })
            .should('have.text', 'Forma de entrega')
    }

    entrarNumeroCasa() {
        cy.get(el.numeroCasa)
            .should('have.class', 'error')
    }

    irParaPagamento() {
        cy.get(el.botaoEntrega)
            .click()
    }

    entrarNumeroCasaValido(user) {
        cy.get(el.numeroCasa)
            .clear()
            .type(user.endereco.numero)
    }

    inserirInputComplemento(usuario) {
        cy.get(el.complemento)
            .clear()
            .type(usuario.complemento)
    }

    inserirCartaoValido(usuario) {
        validIframe().find(el.inputNumeroCartao, { timeout: 10000 })
            .type(usuario.cartao.numero)
        validIframe().find(el.inputNome, { timeout: 10000 })
            .type(usuario.nome + " " + usuario.sobrenome)
        validIframe().find(el.selectMesValidade, { timeout: 10000 })
            .select(usuario.cartao.mesCartao)
        validIframe().find(el.selectAnoValidade, { timeout: 10000 })
            .select(usuario.cartao.anoCartao)
        validIframe().find(el.codigoSegurança, { timeout: 10000 })
            .type(usuario.cartao.codigoSeguranca)
    }

    realizarPagamentoDebito(usuario) {
        cy.get(el.botaoDebito, { timeout: 10000 })
            .click()
        validIframeDebito().find(el.inputNumeroCartaoDebito, { timeout: 10000 })
            .type(usuario.cartao.numero)
        validIframeDebito().find(el.inputNomeDebito, { timeout: 10000 })
            .type(usuario.nome + " " + usuario.sobrenome)
        validIframeDebito().find(el.selectMesValidadeDebito, { timeout: 10000 })
            .select(usuario.cartao.mesCartao)
        validIframeDebito().find(el.selectAnoValidadeDebito, { timeout: 10000 })
            .select(usuario.cartao.anoCartao)
        validIframeDebito().find(el.codigoSegurançaDebito, { timeout: 10000 })
            .type(usuario.cartao.codigoSeguranca)
    }

    validarFormasdePagamento() {
        cy.get(el.pagamentoCredito)
            .should('have.text', 'Cartão de crédito')
        cy.get(el.pagamentoBoleto)
            .should('have.text', 'Boleto bancário')
        cy.get(el.pagamentoPromissory)
            .should('have.text', 'Promissory')
        cy.get(el.pagamentoPromissoria)
            .should('have.text', 'Promissória')
        cy.get(el.pagamentoDebito)
            .should('have.text', 'Cartão de débito')
        cy.get(el.pagamentoPix)
            .should('have.text', 'Pix')
        cy.get(el.PagamentoCustomer)
            .should('have.text', 'Customer Credit')
    }

    inserirCartaoInvalido() {
        cy.get(el.botaoDebito, { timeout: 10000 })
            .click()

        const cartoes = [
            '1',
            '12',
            '123',
            '1234',
            '12345',
            '123456',
            '1234567',
            '12345678',
            '123456789',
            '1234567891212121212',
            '7418529637414141414',
        ]

        cartoes.forEach(function (c) {
            validIframeDebito()
                .find(el.inputNumeroCartaoDebito, { force: true }, { timeout: 10000 })
                .clear({ force: true }, { timeout: 10000 })
            cy.wait(7000)
            validIframeDebito()
                .find(el.inputNumeroCartaoDebito, { force: true }, { timeout: 10000 })
                .type(c)
            cy.get(el.botaoFecharCompra)
                .click({ force: true })
            validIframeDebito()
                .find(el.erroCartao, { timeout: 10000 })
                .should('have.text', 'Não conseguimos confirmar se o número digitado está correto ')
        })
    }

}


export default new CheckoutPage