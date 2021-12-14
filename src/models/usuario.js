const uuid = require('uuid');
const Sequelize = require('sequelize');
const database = require('../../sequelize')

const usuario = (sequelize, DataTypes) => {
const Usuario = database.define('usuario', {
        id: {
            type: Sequelize.UUID,
            defaltValue: DataTypes.UUIDV4,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        senha: { 
            type: Sequelize.STRING,
            allowNull: false
        }
});
}
module.exports = usuario;