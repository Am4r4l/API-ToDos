import jwt from 'jsonwebtoken'
import User from '../models/User';
import authConfig from '../config/auth';


class SessionController {

    async store(req, res) {
        const { email, senha } = req.body;

        // verificando se usuário existe

        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(401).json({ error: 'Usuário não existe.'});
        }

        // verificando se as senhas batem
        
        if(!(await user.checaSenha(senha))) {
            return res.status(401).json({ error: 'Senha incorreta'})
        }

        const { id, nome } = user;

        return res.json({
            user: { 
                id,
                nome, 
                email,
            },
            token: jwt.sign({ id }, authConfig.secret, { 
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();
