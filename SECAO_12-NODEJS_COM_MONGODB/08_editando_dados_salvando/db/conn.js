//  Apoio para conexão com o DB
const { MongoClient } = require('mongodb');

//  Protocolo do MongoBD
const uri = "mongodb://localhost:27017/testemongodb";

//  Criando conexão DB
const client = new MongoClient(uri);

//  Conectando ao DB
async function run() {
    try {
        await client.connect();
        console.log("Conectando ao MondoGB!");
    }
    catch (error) { console.log(error); }
}

run();

module.exports = client;