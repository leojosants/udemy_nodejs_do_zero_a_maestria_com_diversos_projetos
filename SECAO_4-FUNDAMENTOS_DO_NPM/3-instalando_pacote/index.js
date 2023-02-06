// 
const _ = require('lodash');

const a = [1, 2, 3, 4, 5];
const b = [0, 2, 6, 4, 10];

// Diferença entre dois arrays
const diff = _.difference(a, b);

console.log(diff);