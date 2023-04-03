
// ACESSANDO TODOS OS TIPOS DE DADOS DISPONÍVEIS NO BANCO
const { DataTypes } = require('sequelize');

// CONEXÃO COM O BD
const db = require('../db/conn');

// DEFININDO O MODEL
const User = db.define('User',
    {
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        occupation:
        {
            type: DataTypes.STRING,
            require: true
        },
        newletter:
        {
            type: DataTypes.BOOLEAN
        }
    }
);

module.exports = User;