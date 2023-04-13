// 
const Pet = require('../models/Pet');

module.exports = class PetController { 


    //  Create a Pet
    static async create(req, res) {
        res.json({message: 'Pet criado com sucesso!'});
     };
};