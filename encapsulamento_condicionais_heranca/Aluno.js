// encapsulamento_condicionais_heranca/Aluno.js
const Pessoa = require('./Pessoa');

class Aluno extends Pessoa {
    #matricula;

    constructor() {
        super(); // Chama o construtor da classe Pai (Pessoa)
        this.#matricula = "";
    }

    // Getters e Setters para Matrícula (Com Desafio Extra 2: mínimo de 6 caracteres)
    getMatricula() {
        return this.#matricula;
    }

    setMatricula(matricula) {
        // Converte para string para garantir que a propriedade .length funcione
        const matriculaStr = String(matricula);
        
        if (matriculaStr && matriculaStr.trim().length >= 6) {
            this.#matricula = matriculaStr;
            return true;
        }
        return false;
    }
}

module.exports = Aluno;