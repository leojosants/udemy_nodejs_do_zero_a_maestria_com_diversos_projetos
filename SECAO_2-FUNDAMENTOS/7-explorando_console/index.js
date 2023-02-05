
// mais de um valor
const x = 10;
const y = 'João';
const z = [1, 2];

// console.log(`x = ${x}, y = ${y}, z = ${z}`);
console.log(x, y, z);

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

// variável entre string
console.log("O nome é %s e sua profissão é programador.", y);

// limpar console
setTimeout(() => {
    console.clear();
}, 2000);