const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DoctorSchema = new Schema({
  id: ObjectId,
  Nome: String,
  CPF: Number,
  CRM: Number,
  DataNascimento: String,
  Especialidade: String,
});

const DoctorModels = mongoose.model("doctor", DoctorSchema);

module.exports = DoctorModels;
