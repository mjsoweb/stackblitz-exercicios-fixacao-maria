// encapsulamento_condicionais_heranca/Professor.js
const Pessoa = require('./Pessoa');

class Professor extends Pessoa {
    #disciplina;

    constructor() {
        super(); // Chama o construtor da classe Pai (Pessoa)
        this.#disciplina = "";
    }

    // Getters e Setters para Disciplina
    getDisciplina() {
        return this.#disciplina;
    }

    setDisciplina(disciplina) {
        if (disciplina && disciplina.trim() !== "") {
            this.#disciplina = disciplina;
            return true;
        }
        return false;
    }
}

module.exports = Professor;