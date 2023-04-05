
const Tought = require('../models/Tought');
const User = require('../models/User');

// EXPORTANDO MÉTODOS STÁTICOS
module.exports = class ToughtController {

    static async showToughts(req, res) { res.render('toughts/home') };

};