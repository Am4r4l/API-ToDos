import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senha_hasheada: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.senha) {
        user.senha_hasheada = await bcrypt.hash(user.senha, 8);
      }
    });

    return this;
  }

  checaSenha(senha) {
    return bcrypt.compare(senha, this.senha_hasheada);
  }
}

export default User;
