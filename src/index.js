const app = require("./app");
const loaders = require("./loaders");
const cors = require("cors");
const PORT = process.env.PORT || 3000



app.use(cors());
loaders.start();

app.listen(PORT , () => {
  console.log("Server is running");
});
