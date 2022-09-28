const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
require("dotenv").config();

const app = express();
// const PORT = process.env.PORT || 9001;

app.use(express.json());
app.use(morgan("dev"));

// headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api", routes);

module.exports = app