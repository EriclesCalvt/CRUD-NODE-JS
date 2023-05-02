const app = require("./app");
const loaders = require("./loaders");
const cors = require("cors");
const port = process.env.PORT || 3000



app.use(cors());
loaders.start();

app.listen(port , () => {
  console.log("Server is running");
});
