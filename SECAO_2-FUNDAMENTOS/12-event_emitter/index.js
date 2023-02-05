// 
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Criando evento customizado
eventEmitter.on('start', () => {
    console.log('Durante'); 
});

console.log('Antes');

eventEmitter.emit('start');

console.log('Depois');