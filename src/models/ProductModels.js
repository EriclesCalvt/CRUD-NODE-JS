// models do produto(usuário)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  Id: ObjectId,
  Nome: String,
  CPF: Number,
  RG: Number,
  CEP: Number,
  Nascimento: Date,
  NumeroCasa: Number,
  Rua: String,
  Bairro: String,
  Cidade: String,
  Telefone: Number,
  Consulta: String,
});

const ProductModels = mongoose.model("products", ProductSchema);

module.exports = ProductModels;
