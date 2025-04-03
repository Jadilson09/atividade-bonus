var teclado = require("prompt-sync")();
var nome = "Jadson";
var nascimento = 2008;
var atributo = "preto";
var condicao = false;
console.log("O meu nome \u00E9 ".concat(nome, " nasci em ").concat(nascimento, " e sou ").concat(atributo));
nome = "Jadson";
if (nascimento > 2008) {
    console.log("Sim, executei essa linha");
}
else if (nascimento < 1900) {
    console.log("Sim, executei essa linha");
}
else {
    console.log("Sim, executei essa linha");
}
nome = teclado("Digite o seu nome: ");
nascimento = parseInt(teclado("Digite o ano de nascimento: "));
atributo = teclado("Digite o seu atributo: ");
console.log("Ola, meu nome \u00E9 ".concat(nome, " nasci em ").concat(nascimento, " e eu sou ").concat(atributo, "."));
