// projeto/main.js

const CarteiraDigital = require('./carteiraDigital');

// Criando a carteira digital
const carteira = new CarteiraDigital();

// Definindo o titular como "João Silva"
carteira.definirTitular('Maria Silva');

// Depositar R$ 200,00
carteira.depositar(200);

// Consultar o saldo
console.log("Saldo atual:", carteira.consultarSaldo()); // Esperado: 200

// Sacar R$ 50,00
carteira.sacar(50);

// Consultar o saldo novamente
console.log("Saldo após saque:", carteira.consultarSaldo()); // Esperado: 150

// Tentar sacar R$ 500,00 (vai disparar o aviso de saldo insuficiente)
carteira.sacar(500);

// Exibir as informações finais da carteira
console.log("\n--- Informações Finais ---");
carteira.exibirInformacoes();