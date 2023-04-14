const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  Id: ObjectId,
  nome: String,
  password: Number,
  //querie: Array,
});

const UserModels = mongoose.model("user", ProductSchema);

module.exports = UserModels;
