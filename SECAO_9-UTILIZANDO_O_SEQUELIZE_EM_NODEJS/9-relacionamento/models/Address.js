
const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const User = require('./User');

// CRIANDO MODEL / SCHEMA
const Address = db.define('Address',
    {
        street:
        {
            type: DataTypes.STRING,
            require: true
        },

        number:
        {
            type: DataTypes.STRING,
            require: true
        },

        city:
        {
            type: DataTypes.STRING,
            require: true
        },
    }
);

// RELAÇÃO
Address.belongsTo(User);

module.exposts = Address;