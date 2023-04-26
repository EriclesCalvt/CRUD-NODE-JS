const User = require("../models/UserModels");
const UserModels = require("../models/UserModels");
const bodyParser = require("body-parser");

class UserController {
  async store(req, res) {
    const { nome, password } = req.body;
    const ProductIsAlreadyExist = await UserModels.findOne({ nome });
    console.log(req.body);
    if (ProductIsAlreadyExist) {
      return res.status(400).json({ message: "email is already exist !" });
    }

    if (!nome || !password) {
      return res
        .status(400)
        .json({ message: "Email and password is required !" });
    }
    const createdUser = await UserModels.create(req.body);

    return res.status(200).json({"data": createdUser, "message": "ok"});
  }

  async index(req, res) {
    const user = await UserModels.find();
    return res.status(200).json(user);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const User = await UserModels.findById(id);
      console.log(User);

      if (!User) {
        return res.status(404).json({ message: "User does not exist" });
      }
      return res.status(200).json(User);
    } catch (error) {
      return res.status(404).json({ message: "Failed to list User" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await UserModels.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: "User Updated !" });
    } catch (error) {
      return res.status().json({ message: "Failed to update User !" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const UserDeleted = await UserModels.findByIdAndDelete(id);

      if (!UserDeleted) {
        return res.status(404).json({ message: "User does not exist !" });
      }
      return res.status(200).json({ message: "User deleted !" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to delete user !" });
    }
  }
}

module.exports = new UserController();
