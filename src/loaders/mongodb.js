const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://API:API@cluster0.awivmuc.mongodb.net/test"
  );
}
module.exports = startDB;
