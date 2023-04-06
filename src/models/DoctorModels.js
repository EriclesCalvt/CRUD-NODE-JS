const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DoctorSchema = new Schema({
  id: ObjectId,
  CPF: Number,
  CRM: Number,
  Nome: String,
  DataNascimento: Date,
  Speciality: String,
});

const DoctorModels = mongoose.model("doctor", DoctorSchema);

module.exports = DoctorModels;
