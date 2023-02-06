// 
const fs = require('fs');

if (!fs.existsSync('./minhaPasta')) {
    console.log("O diretório 'minhaPasta' não existe!");
    fs.mkdirSync('minhaPasta');
}

else if (fs.existsSync('./minhaPasta')) {
    console.log("O diretório 'minhaPasta' existe!");
}