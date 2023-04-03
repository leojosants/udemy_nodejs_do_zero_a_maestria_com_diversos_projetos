
// importando modulo externo - inquirer
const inquirer = require('inquirer');

// solicitando dados e salvando em um array
inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota? ',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota? ',
    },
])
    .then((answers) => {
        console.log(answers);
        const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2);
        console.log(`A média entre ${answers.p1} e ${answers.p2} é: ${media}`);
    })
    .catch((err) => console.log(err))