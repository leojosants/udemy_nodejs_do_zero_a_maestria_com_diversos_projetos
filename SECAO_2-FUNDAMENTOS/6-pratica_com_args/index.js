
// importando MINIMIST - modulo externo
const minimist = require('minimist');

// modulo interno
const soma = require('./soma').soma;

// resgatando argumentos
const args = minimist(process.argv.slice(2));

// convertendo argumentos para inteiros
const a = parseInt(args['a']);
const b = parseInt(args['b']);

soma(a, b);