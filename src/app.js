const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const authRouter = require('./auth/authRouter');
const cors = require("cors");


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(authRouter)

module.exports = app;
