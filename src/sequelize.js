import Sequelize from 'sequelize';
import dbConfig from './config/config';

import User from './models/User';
import ToDo from './models/ToDo';

const models = [User, ToDo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map(model => model.init(this.connection))
          .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
