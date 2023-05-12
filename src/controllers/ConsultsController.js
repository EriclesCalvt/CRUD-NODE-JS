// controladores do serviço
const ConsultsModels = require("../models/ConsultsModels");

class ConsultsController {
  async store(req, res) {
    const {
      data,
      horario,
      medico,
      especialidade,
      nome,
      cpf,
      rg,
      dataNascimento,
    } = req.body;
    console.log(req.body);
    if (
      !data ||
      !horario ||
      !medico ||
      !especialidade ||
      !nome ||
      !cpf ||
      !rg ||
      !dataNascimento
    ) {
      return res.status(400).json({ message: "Your querie require your data" });
    }
    const createdConsult = await ConsultsModels.create(req.body);

    return res.status(200).json(createdConsult);
  }

  async index(req, res) {
    const consults = await ConsultsModels.find();

    return res.status(200).json(consults);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const consult = await ConsultsModels.findById(id);
      console.log(consult);

      if (!consult) {
        return res.status(404).json({ message: "consult does not exist" });
      }
      return res.status(200).json(consult);
    } catch (error) {
      return res.status(404).json({ message: "Failed to list consult" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await ConsultsModels.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: "Consult Updated !" });
    } catch (error) {
      return res.status().json({ message: "Failed to update consult !" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const consultsDeleted = await ConsultsModels.findByIdAndDelete(id);

      if (!consultsDeleted) {
        return res.status(404).json({ message: "querie does not exist !" });
      }
      return res.status(200).json({ message: "querie deleted !" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to delete querie !" });
    }
  }
}

module.exports = new ConsultsController();
