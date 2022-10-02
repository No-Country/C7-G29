const express = require("express");
// const cors = require('cors')
const morgan = require("morgan");
const routes = require("./routes/index");
require("dotenv").config();

const app = express();

// app.use(cors())

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

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

app.get('/', (req, res) => {
  res.json({
    "userDefault" : "http://localhost:9000/api/usersDefault",
    "userPhotographer" : "http://localhost:9000/api/usersPhotographer",
    "publications" : "http://localhost:9000/api/publication",
  })
})

module.exports = app