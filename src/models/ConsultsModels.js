const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ConsultsSchema = new Schema({
  id: ObjectId,

  agendamento: {
    data: String,
    horario: String,
    medico: String,
    especialidade: String,
  },
  paciente: {
    nome: String,
    rg: Number,
    cpf: Number,
    dataNascimento: String,
  },
});

const ConsultsModels = mongoose.model("consults", ConsultsSchema);

module.exports = ConsultsModels;
