
// importando modulo externo(readline) e utilizando interface para configuração de receber e enviar dados para o usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// solicitado dados e tratando dados recebidos
readline.question("Qual a sua linguagem de programação preferida? ", (language) => {
    
    if (language === 'HTML' || language === 'html') {
        console.log("HTML não é uma linguagem de programação e sim de marcação!");
    }
    else if (language === 'CSS' || language === 'css') {
        console.log("CSS não é uma linguagem de programação e sim de estilo!");
    }
    else {
        console.log(`A minha linguagem de programação preferida é: ${language}`);
    }

    readline.close();
});

