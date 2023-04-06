// Controladores do produto(usuario)
const ProductModels = require("../models/ProductModels");

class ProductController {
  async store(req, res) {
    const { title, description, price } = req.body;
    const ProductIsAlreadyExist = await ProductModels.findOne({ title });

    if (ProductIsAlreadyExist) {
      return res.status(400).json({ message: "Title is already exist !" });
    }

    if (!title || !description || !price) {
      return res
        .status(400)
        .json({ message: "Title, Description and price is required !" });
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
      const { id } = req.params;

      const product = await ProductModels.findById(id);
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
