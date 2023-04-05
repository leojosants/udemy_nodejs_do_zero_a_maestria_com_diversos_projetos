
const { DataTypes } = require('sequelize');
const db = require('../db/conn');

// SCHEMA
const User = db.define('User',
    {
        name:
        {
            type: DataTypes.STRING,
            require: true
        },

        email:
        {
            type: DataTypes.STRING,
            require: true
        },

        senha:
        {
            type: DataTypes.STRING,
            require: true
        },
    }
);

module.exports = User;