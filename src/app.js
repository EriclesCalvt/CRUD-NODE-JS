const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;
