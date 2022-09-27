const { requiresAuth } = require("express-openid-connect");
const { default: mongoose } = require("mongoose");
const userDefaultSchema = require("../models/userDefault");
const express = require("express");
const router = express.Router();

router.get("/profile", requiresAuth(), (req, res) => {
  console.log("asd");
  console.log(req.oidc.user);
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = router;
