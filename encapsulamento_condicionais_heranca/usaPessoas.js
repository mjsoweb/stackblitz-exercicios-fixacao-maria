// encapsulamento_condicionais_heranca/usaPessoas.js
const Pessoa = require('./Pessoa');
const Aluno = require('./Aluno');
const Professor = require('./Professor');

console.log("=== TESTE 1: Pessoa Válida ===");
const p = new Pessoa();
p.setNome("João Silva");
p.setEmail("joao@email.com");
console.log("Nome:", p.getNome());
console.log("Email:", p.getEmail());

console.log("\n=== TESTE 2: Pessoa Inválida ===");
const p2 = new Pessoa();
const resNome = p2.setNome("");
const resEmail = p2.setEmail("emailsemarroba.com"); // Testando e-mail inválido (Desafio Extra 1)

if (!resNome) console.log("Nome inválido");
if (!resEmail) console.log("Email inválido");

console.log("\n=== TESTE 3: Aluno Válido ===");
const a = new Aluno();
a.setNome("Maria");
a.setEmail("maria@email.com");
a.setMatricula("2025001"); // 7 caracteres (Válido pelo Desafio Extra 2)
console.log("Nome:", a.getNome());
console.log("Email:", a.getEmail());
console.log("Matrícula:", a.getMatricula());

console.log("\n=== TESTE 4: Aluno Inválido ===");
const a2 = new Aluno();
const resNomeA2 = a2.setNome("Pedro");
const resEmailA2 = a2.setEmail("");
const resMatA2 = a2.setMatricula("123"); // Menos de 6 caracteres (Inválido)

if (!resNomeA2) console.log("Nome inválido");
if (!resEmailA2) console.log("Email inválido");
if (!resMatA2) console.log("Matrícula inválida (deve ter pelo menos 6 caracteres)");

console.log("\n=== TESTE 5: Professor Válido ===");
const prof = new Professor();
prof.setNome("Carlos");
prof.setEmail("carlos@email.com");
prof.setDisciplina("Programação Web");
console.log("Nome:", prof.getNome());
console.log("Email:", prof.getEmail());
console.log("Disciplina:", prof.getDisciplina());

console.log("\n=== TESTE 6: Professor Inválido ===");
const prof2 = new Professor();
prof2.setNome("Ana");
prof2.setEmail("ana@email.com");
const resDisc = prof2.setDisciplina("");

if (!resDisc) {
    console.log("Erro no cadastro da disciplina: a disciplina não pode ser vazia.");
}