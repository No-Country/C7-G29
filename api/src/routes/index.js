const express = require("express");
const users = require("./users");
const publication = require("./publication");
const challenge = require("./challenges");
const authUser = require("./authUser");
const {verifyToken} = require('../middlewares/auth.middleware')
const searchId = require("./searchId");
const mercadoPago = require("./mercadopago");

const router = express.Router();

router.use("/users", verifyToken, users);
router.use("/publication", publication);
router.use("/challenge", challenge);
router.use("/auth", authUser);
router.use("/searchId", searchId);
router.use("/mercadopago", mercadoPago);
module.exports = router;
