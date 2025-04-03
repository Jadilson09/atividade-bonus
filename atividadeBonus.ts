let teclado = require (`prompt-sync`)();

let nome: string = `Jadson`;
let nascimento: number = 2008;
let atributo: string = `preto`;
let condicao:boolean = false;

console.log(`O meu nome é ${nome} nasci em ${nascimento} e sou ${atributo}`);

nome = `Jadson`

if (nascimento > 2008 ){
    console.log(`Sim, executei essa linha`);
}
else if (nascimento < 2008){
    console.log(`Sim, executei essa linha`);
}
else{
    console.log(`Sim, executei essa linha`);
}

nome = teclado (`Digite o seu nome: `);
nascimento = parseInt(teclado(`Digite o ano de nascimento: `));
atributo = teclado (`Digite o seu atributo: `);

console.log(`Ola, meu nome é ${nome} nasci em ${nascimento} e eu sou ${atributo}.`);