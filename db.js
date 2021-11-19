const Sequelize = require('sequelize');


const sequelize = new Sequelize('d47ub6m44ib6fo', 'orjappkfqbphyb', 'c5ae4d9eb770aa5ab2bada8273c0539e2fc8dfadd21f0fbad3dcb9444536a552', {
    dialect: 'postgres',
    host: 'ec2-50-17-255-244.compute-1.amazonaws.com',
    dialectOptions: {
      ssl: {
      require: true,
      rejectUnauthorized: false
      }
    }
})

module.exports = sequelize;


