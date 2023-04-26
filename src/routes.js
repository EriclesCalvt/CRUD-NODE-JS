const { Router } = require("express");
const { login } = require("./controllers/LoginController");
const routes = Router();
const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");
const ServiceController = require("./controllers/ServiceController");
const DoctorController = require("./controllers/DoctorController");


routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server is on" });
});

// Routes Products:
routes.delete("/Products/:id", ProductController.destroy);
routes.put("/Products/:id", ProductController.update);
routes.get("/Products/:id", ProductController.show);
routes.get("/Products", ProductController.index);
routes.post("/Products/Insert", ProductController.store);

//Routes Services
routes.delete("/Services/:id", ServiceController.destroy);
routes.put("/Services/:id", ServiceController.update);
routes.get("/Services/:id", ServiceController.show);
routes.get("/Services", ServiceController.index);
routes.post("/Services/Insert", ServiceController.store);

// Routes Doctor:
routes.delete("/Doctor/:id", DoctorController.destroy);
routes.put("/Doctor/:id", DoctorController.update);
routes.get("/Doctor/:id", DoctorController.show);
routes.get("/Doctor", DoctorController.index);
routes.post("/doctors/Insert", DoctorController.store);

// Routes users:

// routes.post("/user/cadastro", UserController);
routes.post("/User/Insert", UserController.store);
routes.get("/User/:id", UserController.show);
routes.put("/User/:id", UserController.update);
routes.delete("/User/:id", UserController.destroy);
//routes.post("/User", UserController.login);
routes.post("/User", login);

module.exports = routes;
