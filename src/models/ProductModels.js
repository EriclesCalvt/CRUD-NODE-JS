// models do produto(usuário)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  Id: ObjectId,
  NomeProduct: String,
  Cpf: String,
  Rg: String,
  Cep: String,
  Nascimento: String,
  NumeroCasa: String,
  Rua: String,
  Bairro: String,
  Cidade: String,
  Telefone: String,
  Consulta: String,
});

const ProductModels = mongoose.model("products", ProductSchema);

module.exports = ProductModels;
