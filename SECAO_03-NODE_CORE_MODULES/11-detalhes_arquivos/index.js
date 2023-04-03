// 
const fs = require('fs');
const novoArquivo = 'novoArquivo.txt';

fs.stat(novoArquivo, (err, stats) => {

    if (err) {
        console.log(err);
        return
    }

    console.log(`Dados do arquivo '${novoArquivo}'`);
    console.log(`- É um arquivo? ${stats.isFile()}`);
    console.log(`- É um diretório? ${stats.isDirectory()}`);
    console.log(`- É um link simbólico? ${stats.isSymbolicLink()}`);
    console.log(`- Data de criação: ${stats.ctime}`);
    console.log(`- Tamanho do arquivo: ${stats.size}`);

});