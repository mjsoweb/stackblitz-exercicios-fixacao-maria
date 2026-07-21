// projeto/main.js

// Importando a classe do arquivo conversor.js
import { Conversor } from './conversor.js';

// Criando uma nova instância (um "objeto") da classe Conversor
const conversor = new Conversor();

// Executando os testes e exibindo os resultados no console
console.log(`${25}°C = ${conversor.celsiusParaFahrenheit(25)}°F`);
console.log(`${10} km = ${conversor.quilometrosParaMilhas(10)} milhas`);
console.log(`${150} minutos = ${conversor.minutosParaHoras(150)} horas`);