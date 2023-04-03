// 
const os = require('os');

// Dados do SO/Servidor
console.log('Dados do SO/Servidor');
console.log(os.cpus()); // qtd CPUs
console.log(os.freemem()); // total memoria livre
console.log(os.homedir()); // diretorio da home
console.log(os.type()); // diretorio principal / tipo
