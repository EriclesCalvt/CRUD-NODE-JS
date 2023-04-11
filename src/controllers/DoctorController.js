// Controladores dos médicos (doctor)
const DoctorModels = require("../models/DoctorModels");

class DoctorController {
  async store(req, res) {
    const { Nome, CPF, CRM } = req.body;
    const ProductIsAlreadyExist = await DoctorModels.findOne({ CPF });

    console.log(req.body);

    if (ProductIsAlreadyExist) {
      return res.status(400).json({ message: "CPF is already exist !" });
    }

    if (!Nome || !CPF || !CRM) {
      return res
        .status(400)
        .json({ message: "CPF, CRM and Nome is required !" });
    }
    const createdDoctor = await DoctorModels.create(req.body);

    return res.status(200).json(createdDoctor);
  }

  async index(req, res) {
    const doctor = await DoctorModels.find();

    return res.status(200).json(doctor);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const doctor = await DoctorModels.findById(id);
      console.log(doctor);

      if (!doctor) {
        return res.status(404).json({ message: "Doctor does not exist" });
      }
      return res.status(200).json(doctor);
    } catch (error) {
      return res.status(404).json({ message: "Failed to list doctor" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await DoctorModels.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: "Doctor Updated !" });
    } catch (error) {
      return res.status().json({ message: "Failed to update Doctor !" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const doctorDeleted = await DoctorModels.findByIdAndDelete(id);

      if (!doctorDeleted) {
        return res.status(404).json({ message: "Doctor does not exist !" });
      }
      return res.status(200).json({ message: "Doctor deleted !" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to delete doctor !" });
    }
  }
}

module.exports = new DoctorController();
