const UserModels = require("../models/UserModels");
const bcrypt = require("bcrypt");
const SECRET = 'ericlesprogrammer@gmail.com'
const jwt = require("jsonwebtoken");
// const { Router } = require("express");

async function login(req, res) {
  const { nome, password } = req.body;
  console.log(req.body)
  try { 
    // buscar pelo usuário correspondente ao nome fornecido
    const user = await UserModels.findOne({ nome: nome, password: password });
    console.log(user);
    if (user === null) {
      // o nome fornecido não corresponde a um usuário válido, mostrar uma mensagem de erro
      res.status(400).json({ message: "Nome ou senha incorretos" });
      return;
    }
    // verificar se a senha fornecida corresponde à senha armazenada no documento de usuário encontrado
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      // a senha está correta, redirecionar para a página desejada
      res.status(200).json({ message: "ok" });
    } else {
      // a senha está incorreta, mostrar uma mensagem de erro
      res.status(400).json({ message: "Nome ou senha incorretos" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
}

module.exports = { login };
