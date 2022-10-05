const express = require("express");
const { buy } = require("../controllers/mercadopago.controller");

const router = express.Router();

router.post("/buy", buy);

module.exports = router;
