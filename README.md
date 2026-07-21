# stackblitz-exercicios-fixacao-maria

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/mjsoweb/stackblitz-exercicios-fixacao-maria)
# 📚 Portfólio de Estudos: Programação Estruturada e Orientação a Objetos (JavaScript)

Repositório dedicado aos exercícios práticos desenvolvidos durante os módulos de **Programação Estruturada**, **Orientação a Objetos**, **Visibilidade e Encapsulamento**, e **Herança** em JavaScript.

---

## 🗂️ Estrutura do Repositório

```text
meu-projeto/
├── programacao_estruturada/
│   ├── conversores.js
│   └── app.js
├── projeto_oo/
│   ├── conversor.js
│   └── main.js
├── carteira_digital/
│   ├── carteiraDigital.js
│   └── main.js
└── encapsulamento_condicionais_heranca/
    ├── Pessoa.js
    ├── Aluno.js
    ├── Professor.js
    └── usaPessoas.js

```

---

## 💻 Módulos Desenvolvidos

### 1. Programação Estruturada (`/programacao_estruturada`)

Focado na criação de funções utilitárias isoladas, modularização de código com CommonJS e exportação/importação básica.

* **`conversores.js`**: Biblioteca contendo funções para conversão de temperatura, horas em minutos, idade em dias, quilômetros em metros e cálculo de consumo médio de combustível.
* **`app.js`**: Arquivo de testes que importa a biblioteca e exibe os resultados no console.

### 2. Orientação a Objetos (`/projeto_oo`)

Evolução do sistema utilizando o paradigma de Orientação a Objetos moderno com classes e módulos ES6 (`import`/`export`).

* **`conversor.js`**: Implementação da classe `Conversor` agrupando métodos de conversão de temperatura, distância e tempo.
* **`main.js`**: Instanciação do objeto através da palavra-chave `new` e execução dos testes.

### 3. Visibilidade e Encapsulamento (`/carteira_digital`)

Aplicação de segurança e proteção de dados utilizando atributos privados.

* **`carteiraDigital.js`**: Classe com atributos privados (`#titular`, `#saldo`) e métodos de depósito, saque com validação de saldo e formatação de valores.
* **`main.js`**: Script de validação das operações financeiras e exibição de informações seguras.

### 4. Herança, Condicionais e Polimorfismo (`/encapsulamento_condicionais_heranca`)

Implementação de hierarquia de classes, validações complexas com Getters/Setters e herança com `extends`.

* **`Pessoa.js`**: Classe base com validação de nome e e-mail (incluindo verificação do caractere `@`).
* **`Aluno.js`**: Herda de `Pessoa` e adiciona validação de matrícula (mínimo de 6 caracteres).
* **`Professor.js`**: Herda de `Pessoa` e adiciona validação de disciplina.
* **`usaPessoas.js`**: Centraliza os cenários de testes cobrindo fluxos válidos e inválidos.

---

## 🚀 Como Executar os Projetos

Certifique-se de ter o **Node.js** instalado em sua máquina.

1. Navegue até a pasta do exercício desejado via terminal:
```bash
cd nome-da-pasta

```


2. Execute o arquivo de testes correspondente (exemplo):
```bash
node usaPessoas.js

```



---

## 📝 Questões Teóricas e Respostas

### 1) O que é encapsulamento?

É o princípio da orientação a objetos que consiste em esconder os detalhes internos de funcionamento de uma classe e proteger seus dados, permitindo o acesso e alteração apenas por meio de métodos específicos (`get` e `set`).

### 2) Qual a vantagem de utilizar atributos privados?

Eles garantem a segurança dos dados, impedindo que partes externas do código corrompam, apaguem ou alterem informações críticas de forma incorreta ou sem validação direta.

### 3) Qual a diferença entre `getNome()` e `setNome()`?

* **`getNome()`**: É um método *Getter* usado para consultar ou retornar o valor armazenado em um atributo privado.
* **`setNome()`**: É um método *Setter* usado para atribuir ou modificar o valor desse atributo, geralmente aplicando regras de validação prévias.

### 4) O que faz a palavra-chave `extends`?

Ela é utilizada na declaração de uma classe para indicar que ela está herdando todas as características (atributos e métodos) de outra classe (a classe pai).

### 5) Uma classe filha pode utilizar métodos da classe pai? Explique.

Sim. Como a classe filha herda a estrutura da classe pai, ela ganha acesso automático aos métodos públicos e protegidos definidos na superclasse, promovendo o reaproveitamento de código.

### 6) Por que utilizar validações dentro dos métodos de uma classe?

Para garantir que o objeto nunca receba dados inconsistentes, vazios ou incorretos, preservando a integridade das regras de negócio do sistema.

### 7) Qual a diferença entre herança e reutilização de código por cópia?

Na reutilização por cópia, duplicamos o código manualmente, o que gera redundância e dificulta a manutenção (exigindo alterações em múltiplos locais). Na herança, o comportamento fica centralizado na classe pai, e a classe filha apenas o herda dinamicamente, facilitando futuras manutenções e escalabilidade.
