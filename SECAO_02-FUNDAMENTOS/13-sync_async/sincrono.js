// Importando o módulo File System- fs
const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo.txt', 'oi');

console.log('Fim');