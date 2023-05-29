const UserModels = require('../models/UserModels'); // Verifique o caminho correto para o arquivo UserModels.js

async function index(req, res) {
  try {
    const users = await UserModels.find({}, 'nome');
    if (users.length === 0) {
      return res.status(404).json({ message: 'Nenhum usuário encontrado!' });
    }
    const formattedUsers = users.map(user => ({
      _id: user._id.toString(),
      nome: user.nome
    }));
    res.json(formattedUsers);
  } catch (error) {
    console.error('Erro ao obter os usuários:', error);
    res.status(500).json({ message: 'Erro ao obter os usuários da API' });
  }
}

module.exports = { index };

