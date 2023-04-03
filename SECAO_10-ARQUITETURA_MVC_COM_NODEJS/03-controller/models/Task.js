
// IMPORTANDO OS TIPOS DE DADOS 
const { DataTypes } = require('sequelize');

// IMPORTANTO A CONEXÃO DO BD
const db = require('../db/conn');

// CRIANDO SCHEMA
const Task = db.define('Task',
    {
        title:
        {
            type: DataTypes.STRING,
            required: true
        },

        description:
        {
            type: DataTypes.STRING,
            required: true
        },

        done:
        {
            type: DataTypes.BOOLEAN,
            required: true
        }
    }
);

module.exports = Task;