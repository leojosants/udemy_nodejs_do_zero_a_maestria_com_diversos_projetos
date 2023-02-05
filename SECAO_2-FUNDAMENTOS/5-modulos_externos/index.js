
// importando MINIMIST
const minimist = require('minimist');

// resgatando argumento
const args = minimist(process.argv.slice(2));
console.log(args);

// acessando argumento
const nome = args['nome'];
const profissao = args['profissao'];
console.log(nome, profissao);

// Criando string
console.log(`O nome dele é ${nome} e sua profissão é ${profissao}.`);