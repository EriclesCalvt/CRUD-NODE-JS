const app = require("./app");
const loaders = require("./loaders");
const cors = require("cors");



app.use(cors());
loaders.start();

app.listen(3000, () => {
  console.log("Server is running");
});
