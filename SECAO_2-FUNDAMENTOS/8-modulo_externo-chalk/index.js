
// importando modulo externo - chalk
const chalk = require("chalk");

const nota = 6;

if (nota >= 7) {
    console.log(chalk.green.bold('Parabens! Você está aprovado!'));
}
else {
    console.log(chalk.bgRed('Você precisa fazer a prova de recuperação!'));
}