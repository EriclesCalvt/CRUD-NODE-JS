const { Router } = require("express");
const ProductController = require("./controllers/ProductController");
const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server is on" });
});

routes.delete("/Products/:id", ProductController.destroy);
routes.put("/Products/:id", ProductController.update);
routes.get("/Products/:id", ProductController.show);
routes.get("/Products", ProductController.index);
routes.post("/Products", ProductController.store);

module.exports = routes;
