// 
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/getapet');
    console.log('Conectado ao Mongoose!');
};

main().catch((error) => console.log(err));

module.exports = mongoose;