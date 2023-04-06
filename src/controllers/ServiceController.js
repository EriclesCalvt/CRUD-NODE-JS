// controladores do serviço
const ServiceModels = require("../models/ServiceModels");

class ServiceController {
  async store(req, res) {
    const { Nome, Horario, Data, NomePaciente } = req.body;
    const ProductIsAlreadyExist = await ServiceModels.findOne({ Nome });

    if (ProductIsAlreadyExist) {
      return res.status(400).json({ message: "Title is already exist !" });
    }

    if (!Nome || !Horario || !Data || !NomePaciente) {
      return res
        .status(400)
        .json({ message: "Nome, Description and price is required !" });
    }
    const createdService = await ServiceModels.create(req.body);

    return res.status(200).json(createdService);
  }

  async index(req, res) {
    const services = await ServiceModels.find();

    return res.status(200).json(services);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const service = await ServiceModels.findById(id);
      console.log(service);

      if (!service) {
        return res.status(404).json({ message: "Service does not exist" });
      }
      return res.status(200).json(service);
    } catch (error) {
      return res.status(404).json({ message: "Failed to list service" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await ServiceModels.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: "Product Updated !" });
    } catch (error) {
      return res.status().json({ message: "Failed to update product !" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const serviceDeleted = await ServiceModels.findByIdAndDelete(id);

      if (!serviceDeleted) {
        return res.status(404).json({ message: "Product does not exist !" });
      }
      return res.status(200).json({ message: "Service deleted !" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to delete service !" });
    }
  }
}

module.exports = new ServiceController();
