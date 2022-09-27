const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes/index");
const { auth } = require("express-openid-connect");
require("dotenv").config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: "http://localhost:9000",
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
};

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(morgan("dev"));

// cors
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

app.use(auth(config));

app.use("/api", routes);
app.get("*", function (req, res) {
  res.redirect("http://localhost:3000");
});

console.log(process.env.MONGODB_URI);

// Conexion a la base de datos (atlas)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("successful connection to mongodb atlas"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
