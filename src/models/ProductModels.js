const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  Id: ObjectId,
  title: String,
  description: String,
  price: Number,
});

const ProductModels = mongoose.model("products", ProductSchema);

module.exports = ProductModels;
