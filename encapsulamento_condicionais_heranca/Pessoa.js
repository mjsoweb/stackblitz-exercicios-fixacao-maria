// projeto/Pessoa.js

class Pessoa {
    #nome;
    #email;

    constructor() {
        this.#nome = "";
        this.#email = "";
    }

    setNome(nome) {
        // Verifica se o nome não está vazio ou preenchido só com espaços
        if (nome && nome.trim() !== "") {
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        // Verifica se o e-mail não está vazio E se contém o caractere '@' (Desafio Extra 1)
        if (email && email.trim() !== "" && email.includes("@")) {
            this.#email = email;
            return true;
        }
        return false;
    }

    getEmail() {
        return this.#email;
    }
}

module.exports = Pessoa;