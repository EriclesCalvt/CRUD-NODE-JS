// Controladores do produto(usuario)
const ProductModels = require("../models/ProductModels");

class ProductController {
  async store(req, res) {
    const { Cpf, Cep, NomeProduct } = req.body;
    const ProductIsAlreadyExist = await ProductModels.findOne({ Cpf });

    console.log(req.body);
    if (ProductIsAlreadyExist) {
      return res.status(400).json({ message: "Title is already exist !" });
    }

    if (!Cpf || !Cep || !NomeProduct) {
      return res
        .status(400)
        .json({ message: "CPF, RG and Nome is required !" });
    }
    const createdProduct = await ProductModels.create(req.body);

    return res.status(200).json(createdProduct);
  }

  async index(req, res) {
    const products = await ProductModels.find();

    return res.status(200).json(products);
  }

  async show(req, res) {
    try {
      const { NomeProduct } = req.params;

      const product = await ProductModels.findById(NomeProduct);
      console.log(product);

      if (!product) {
        return res.status(404).json({ message: "Product does not exist" });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(404).json({ message: "Failed to list product" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await ProductModels.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: "Product Updated !" });
    } catch (error) {
      return res.status().json({ message: "Failed to update product !" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const productDeleted = await ProductModels.findByIdAndDelete(id);

      if (!productDeleted) {
        return res.status(404).json({ message: "Product does not exist !" });
      }
      return res.status(200).json({ message: "Product deleted !" });
    } catch (error) {
      return res.status(404).json({ message: "Failed to delete product !" });
    }
  }
}

module.exports = new ProductController();
