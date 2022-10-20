const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
require("dotenv").config();

// MIDDLEWARES
const app = express();
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  res.header("Access-Control-Allow-Origin", "https://darkroom-client.vercel.app");

  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());
app.use(morgan("dev"));
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({
    users: "https://deploy-api-c7-dark-room.onrender.com/api/users/allUserDefault",
    photographers: "https://deploy-api-c7-dark-room.onrender.com/api/users/allUserPhotographer",
    publications: "https://deploy-api-c7-dark-room.onrender.com/api/publication",
  });
});

module.exports = app;
