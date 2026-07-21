// programacao_estruturada/main.js

// Importando a biblioteca que criamos no outro arquivo
const conversor = require('./conversor');

// Executando os testes e exibindo os resultados no console
console.log(conversor.celsiusParaFahrenheit(30)); // Esperado: 86
console.log(conversor.horasParaMinutos(2));        // Esperado: 120
console.log(conversor.idadeEmDias(20));          // Esperado: 7300
console.log(conversor.kmParaMetros(3));          // Esperado: 3000
console.log(conversor.consumoMedio(500, 40));    // Esperado: 12.5