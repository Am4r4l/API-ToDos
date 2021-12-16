const uuid = require('uuid');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const database = require('../../sequelize')


const Usuario = database.define('usuario', {

        nome: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        senha: { 
            type: Sequelize.STRING,
        }
}, 
{
    timestamps: false
}
);

Usuario.beforeCreate((Usuario) => {

    return bcrypt.hash(Usuario.senha, 10)
        .then(hash => {
            Usuario.senha = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
});


module.exports = Usuario;