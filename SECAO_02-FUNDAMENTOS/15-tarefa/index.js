// 
const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'p1',
        message: 'Informe o nome do usuário: ',
    },

    {
        name: 'p2',
        message: 'Informe a idade do usuário: ',
    },
]).then((answers) => {
    console.log(answers);
    
    if(!answers.p1 || !answers.p2) {
        throw new Error('O nome e a idade são obrigatórios!');
    }

    const name = answers.p1;
    const age = parseInt(answers.p2);

    console.log(chalk.bgYellow.black`Dados do usuário: Nome = ${name} - Idade = ${age} anos.`);

}).catch((err) =>
console.log(err))