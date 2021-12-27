const express = require('express');

const router = express.Router();
const Usuario = require('../controllers/models/usuario');

function checaRequisicao(req, res, next) {
  const { nome, email, senha, confirmaSenha } = req.body;

  if (!nome) {
    return res.status(422).json({ msg: 'O nome é obrigatório' });
  }
  if (!email) {
    return res.status(422).json({ msg: 'O email é obrigatório' });
  }
  if (!senha) {
    return res.status(422).json({ msg: 'A senha é obrigatória' });
  }
  if (senha !== confirmaSenha) {
    return res.status(422).json({ msg: 'As senhas informadas não coincidem' });
  }

  return next();
}

async function checaUsuario(req, res, next) {
  const { nome, email, senha, confirmaSenha } = req.body;
  const usuarioExiste = await Usuario.findOne({
    where: { email },
  });

  if (usuarioExiste) {
    return res
      .status(422)
      .json({ msg: 'Email já cadastrado, por favor informe outro email' });
  }

  return next();
}

module.exports = { checaRequisicao, checaUsuario };
