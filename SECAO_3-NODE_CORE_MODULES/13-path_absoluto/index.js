// 
const path = require('path');
const arquivoTeste = 'teste.txt';

console.log("Dados do arquivo 'teste.txt':");

// Path absoluto
console.log(`- Caminho absoluto: ${path.resolve(arquivoTeste)}`);

// Formar path
const midFolder = 'relatorios';
const fileName = 'leo.txt';
const finalPath = path.join('/', 'arquivos', midFolder, fileName);

console.log(`- Path formado: ${finalPath}`);