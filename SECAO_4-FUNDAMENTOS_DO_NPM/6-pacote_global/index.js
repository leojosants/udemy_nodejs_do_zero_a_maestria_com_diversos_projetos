// 
const _ = require('lodash');
const arr = [1, 2, 3, 3, 4, 4, 5, 5];

console.log(`arr: ${arr}`);
console.log(`arr com aplicação do LODASH: ${_.sortedUniq(arr)}`);
