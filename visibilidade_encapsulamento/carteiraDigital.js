// projeto/carteiraDigital.js

class CarteiraDigital {
    // Definindo os atributos privados usando o '#'
    #titular;
    #saldo;

    // O construtor inicializa o saldo com 0 quando criamos a carteira
    constructor() {
        this.#titular = "";
        this.#saldo = 0;
    }

    // 1. Definir Titular
    definirTitular(nome) {
        this.#titular = nome;
    }

    // 2. Consultar Titular
    consultarTitular() {
        return this.#titular;
    }

    // 3. Depositar Saldo
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    // 4. Sacar Saldo (com validação para não ficar com saldo negativo)
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            return true;
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque!");
            return false;
        }
    }

    // 5. Consultar Saldo
    consultarSaldo() {
        return this.#saldo;
    }

    // 6. Exibir Informações
    exibirInformacoes() {
        // Formatando o saldo com o padrão brasileiro (R$ 150,00)
        console.log(`Titular: ${this.#titular}`);
        console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`);
    }
}

// Exportando a classe usando o padrão module.exports
module.exports = CarteiraDigital;