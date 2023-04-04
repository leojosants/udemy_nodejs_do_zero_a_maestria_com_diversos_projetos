
const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const User = require('./User');

// SCHEMA
const Tought = db.define('Tought',
    {
        title:
        {
            type: DataTypes.STRING,
            allowNull: false,
            require: true
        }
    }
);

// CARDINALIDADE
Tought.belongsTo(User);
User.hasMany(Tought);

module.exports = Tought;