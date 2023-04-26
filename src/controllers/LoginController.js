const UserModels = require("../models/UserModels");
const bcrypt = require("bcrypt");

async function login(event, req, res) {
  event.preventDefault();
  const { nome, password } = req.body;

  try {
    // buscar pelo usuário correspondente ao nome fornecido
    const user = await UserModels.findOne({ nome });

    if (!user) {
      // o nome fornecido não corresponde a um usuário válido, mostrar uma mensagem de erro
      return res.status(400).json({ error: "Nome ou senha incorretos" });
    }

    // verificar se a senha fornecida corresponde à senha armazenada no documento de usuário encontrado
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      // a senha está correta, redirecionar para a página desejada
      res.redirect("/pagina-especifica");
    } else {
      // a senha está incorreta, mostrar uma mensagem de erro
      res.status(400).json({ error: "Nome ou senha incorretos" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

module.exports = { login };
