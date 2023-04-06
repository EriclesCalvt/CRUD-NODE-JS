function UserController(req, res) {
  console.log(req.body);
  res.status(200).json("deu bom");
}

module.exports = UserController;
