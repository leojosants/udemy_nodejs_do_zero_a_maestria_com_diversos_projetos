// 
const path = require('path');

// Suponhamos um caminho ficticio
const customPath = '/relatorios/matheus/relatorio1.pdf';

console.log("Dados do arquivo:");
console.log(`- Caminho: ${path.dirname(customPath)}`);
console.log(`- Nome: ${path.basename(customPath)}`);
console.log(`- Extesão: ${path.extname(customPath)}`);