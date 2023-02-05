
// passando argumentos via terminal e resgatando

console.log(process.argv);

// resgatando argumento
const args = process.argv.slice(2);
console.log(args);

// resgatando nome
const nome = args[0].split('=')[1];
console.log(nome);

// resgatando idade
const idade = args[1].split('=')[1];
console.log(idade);

// compondo uma string
console.log(`O nome dele é ${nome} e tem ${idade} anos.`);