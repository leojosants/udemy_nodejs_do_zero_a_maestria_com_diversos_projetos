// 
const x = 10;

// checar se x é um número
if (!Number.isInteger(x)) {
    throw new Error('O valor x não é um número inteiro!');
}

console.log('Continuando o código...');

