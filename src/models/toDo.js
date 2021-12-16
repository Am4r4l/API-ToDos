const uuid = require('uuid');
const Sequelize = require('sequelize');
const database = require('../../sequelize')

const toDo = (sequelize, DataTypes) => {
const ToDo = database.define('to-do', {
        id: {
            type: Sequelize.UUID,
            defaltValue: DataTypes.UUIDV4,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        titulo: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        descricao: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        completo: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
});
}
module.exports = toDo;