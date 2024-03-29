exports.el = {
    produtoCheckout: '.product-item',
    botaoRemover: '.item-link-remove',
    tituloCheckout: '.empty-cart-title',
    incrementarItem: '.item-quantity-change-increment',
    decrementarItem: '.item-quantity-change-decrement',
    verificarQuantidadeItem:'input[id^="item-quantity"]',
    continuarPagamento: '#cart-to-orderform',
    botaoEnviarDadosPessoais: '#go-to-shipping',
    clientEmail: '#client-pre-email',
    btnCliente: '#btn-client-pre-email',
    tituloEndereco: '.vtex-omnishipping-1-x-deliveryGroup .vtex-omnishipping-1-x-shippingSectionTitle',

    erroEmail: '.box-client-info .client-email span.help.error',
    erroPrimeiroNome: '.box-client-info .client-first-name span.help.error',
    erroSobrenome: '.box-client-info .client-last-name span.help.error',
    erroCPF: '.box-client-info .client-document span.help.error',
    erroTelefone: '.box-client-info .client-phone span.help.error',
    erro: '.error',
    
    nomeInput: '#client-first-name',
    sobrenomeInput: '#client-last-name',
    cpfInput: '#client-document',
    telefoneInput: '#client-phone',
    emailInput: '#client-email',
    
    cepInput: '.ship-postalCode',
    numeroCasa: '#ship-number',
    complemento: '#ship-complement',
    botaoEntrega: '#btn-go-to-payment',
    destinatario: '#ship-receiverName',

    iframeCartao: '#iframe-placeholder-creditCardPaymentGroup > .span12',
    botaoFecharCompra: '[data-bind="fadeVisible: !window.router.sac.isActive() && window.paymentData.isPaymentButtonVisible(), click: submit, disable: window.checkout.disablePaymentButton"]',
    erroCartao: '.title-description .description',

    inputNumeroCartao: '.iframe-credit-card-payment-group input#creditCardpayment-card-0Number.input-medium',
    inputNome: '.iframe-credit-card-payment-group input#creditCardpayment-card-0Name.input-medium',
    selectMesValidade: '.iframe-credit-card-payment-group select#creditCardpayment-card-0Month',
    selectAnoValidade: '.iframe-credit-card-payment-group select#creditCardpayment-card-0Year',
    codigoSegurança: '.iframe-credit-card-payment-group input#creditCardpayment-card-0Code',
    
    pagamentoCredito: '#payment-group-creditCardPaymentGroup > .payment-group-item-text',
    pagamentoPix: '#payment-group-instantPaymentPaymentGroup > .payment-group-item-text'
}