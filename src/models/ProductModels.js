// models do produto(usuário)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  Id: ObjectId,
  NomeProduct: String,
  Cpf: Number,
  Rg: Number,
  Cep: Number,
  Nascimento: String,
  NumeroCasa: Number,
  Rua: String,
  Bairro: String,
  Cidade: String,
  Telefone: Number,
  Consulta: String,
});

const ProductModels = mongoose.model("products", ProductSchema);

module.exports = ProductModels;
