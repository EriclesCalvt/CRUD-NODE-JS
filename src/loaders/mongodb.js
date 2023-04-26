const mongoose = require("mongoose");
const bodyParser = require("body-parser");
async function startDB() {
  await mongoose.connect(
    "mongodb+srv://API:API@cluster0.awivmuc.mongodb.net/test",
    { useNewUrlParser: true }
  );
}
module.exports = startDB;

//mongoose.connect('mongodb://localhost:27017/meu-banco-de-dados', { useNewUrlParser: true });
