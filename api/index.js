const app = require('./src/app')
const mongoose = require("mongoose");

const {PORT} = process.env

// Conexion a la base de datos (atlas)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("successful connection to mongodb atlas"))
  .catch((error) => console.log(error));

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});

module.exports = server