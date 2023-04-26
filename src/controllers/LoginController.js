const UserModels = require("../models/UserModels");
const bcrypt = require("bcrypt");


async function login(req, res) {
  const { email, password } = req.body;
  
  try {
    // buscar pelo usuário correspondente ao nome fornecido
    const user = await UserModels.findOne({nome: email, password: password});
  

    console.log(user)
    if (user === null) {
      // o nome fornecido não corresponde a um usuário válido, mostrar uma mensagem de erro
      res.status(400).json({ message: "Nome ou senha incorretos" });
      return;
    }
    console.log("ola mundo")
    // verificar se a senha fornecida corresponde à senha armazenada no documento de usuário encontrado
    const match = await bcrypt.compare(password, user.password);
  
    if (!match) {
      // a senha está correta, redirecionar para a página desejada
      res.status(200).json({ message: "ok" });
    } else {
      // a senha está incorreta, mostrar uma mensagem de erro
      res.status(400).json({ message: "asdfasd Nome ou senha incorretos" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
}

module.exports = { login };
