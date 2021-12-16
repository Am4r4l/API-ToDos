const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//model
const Usuario = require("../models/usuario");

// Rotas públicas

    // Cadastro de Usuario

    router.post("/cadastro", async (req, res) => {
    try {
        const { nome, email, senha, confirmaSenha } = req.body;

        // validações

        if (!nome) {
        return res.status(422).json({ msg: "O nome é obrigatório" });
        }
        if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório" });
        }
        if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória" });
        }
        if (senha !== confirmaSenha) {
        return res
            .status(422)
            .json({ msg: "As senhas informadas não coincidem" });
        }

        // checar se o usuário já existe

        const usuarioExiste = await Usuario.findOne({
        where: { email },
        });

        if (usuarioExiste) {
        return res
            .status(422)
            .json({ msg: "Email já cadastrado, por favor informe outro email" });
        }

        // criar usuário

        const usuario = new Usuario({
        nome,
        email,
        senha,
        });

        await usuario.save();

        return res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
        console.log(`Usuario ${usuario} cadastrado`);
    } catch (error) {
            console.log(error);

            return res.status(500).json({
            msg: "Ocorreu um erro no servidor, tente novamente mais tarde!",
            });
    }
    });

    // Login 

    router.post("/login", async (req, res) => {
        try {
            const { email, senha } = req.body;

            // Validações

            if (!email) {
            return res.status(422).json({ msg: "O email é obrigatório" });
            }
            if (!senha) {
            return res.status(422).json({ msg: "A senha é obrigatória" });
            } 

            // checar se o usuário existe 

            const usuarioExiste = await Usuario.findOne({
                where: { email },
            });

            if(!usuarioExiste) {
                return res.status(404).json({ msg: "Usuário não encontrado!"})
            }

            // checar se a senha coincide com o banco de dados 

            const checaSenha = await bcrypt.compare(senha, usuarioExiste.senha)

            if(!checaSenha) {
                return res.status(422).json({ msg: "Senha inválida"})
            }

            
                const secret = process.env.SECRET

                const token = jwt.sign(
                    {
                    id: usuarioExiste._id
                    }, secret)

            return res.status(200).json({ msg: "Autenticação realizada com sucesso!", token})

            
            

        } catch (error) {
            console.log(error);

            return res.status(500).json({
            msg: "Ocorreu um erro no servidor, tente novamente mais tarde!",
            });
        }
    })

// Rotas privadas  

router.get("/", async (req, res) => {

});



router.get("/:id", async (req, res) => {

});

module.exports = router;
