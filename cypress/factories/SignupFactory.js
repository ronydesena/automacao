import { faker } from '@faker-js/faker'
var cpf = require('gerador-validador-cpf')

export default {

    user: function () {

        var data = {
            nome: faker.name.firstName(),
            sobrenome: faker.name.lastName(),
            cpf: cpf.generate(),
            email: faker.internet.email(),
            telefone: faker.phone.number('84########'),
            endereco: {
                cep: '59076400',
                numero: faker.random.numeric(2)
            },
            complemento: faker.random.word(),
            cartao: {
                numero: '5222483502564767',
                mesCartao: '0' + faker.random.numeric(1),
                anoCartao: '2' + faker.random.numeric(1),
                codigoSeguranca: faker.random.numeric(3)
            }
        }

        return data
    }
}