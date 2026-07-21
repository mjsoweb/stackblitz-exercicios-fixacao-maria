// encapsulamento_condicionais_heranca/Pessoa.js

class Pessoa {
    #nome;
    #email;

    constructor() {
        this.#nome = "";
        this.#email = "";
    }

    // Getters e Setters para Nome
    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        // Verifica se o nome não está vazio ou preenchido só com espaços
        if (nome && nome.trim() !== "") {
            this.#nome = nome;
            return true;
        }
        return false;
    }

    // Getters e Setters para Email (Com Desafio Extra 1: validação do '@')
    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        // Verifica se não está vazio E se contém o caractere '@'
        if (email && email.trim() !== "" && email.includes("@")) {
            this.#email = email;
            return true;
        }
        return false;
    }
}

module.exports = Pessoa;