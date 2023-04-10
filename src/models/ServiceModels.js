// Models dos serviços
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ServiceSchema = new Schema({
  id: ObjectId,
  Nome: String,
  Horarios: String,
  Data: String,
  NomePaciente: String,
  // idUser: String,
});

const ServiceModels = mongoose.model("Services", ServiceSchema);
module.exports = ServiceModels;
