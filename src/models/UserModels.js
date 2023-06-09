const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  Id: ObjectId,
  nome: { type: String, required: true },
  password: { type: String, required: true },
  //querie: Array,
});

const UserModels = mongoose.model("user", ProductSchema);

module.exports = UserModels;
