
const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = class AuthController {

    static login(req, res) { res.render('auth/login') };
    static register(req, res) { res.render('auth/register') };

    static async registerPost(req, res) {

        const { name, email, password, confirmPassword } = req.body;

        // PASSWORD MATCH VALIDATION
        if (password != confirmPassword) {
            req.flash('message', 'As senhas não conferem, tente novamente!');
            res.render('auth/register');
            return;
        }
    };
};