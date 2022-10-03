const express = require("express");
const users = require("./users");
const publication = require("./publication");
const challenge = require("./challenges");
const authUser = require("./authUser");

const router = express.Router();

router.use("/users", users);
router.use("/publication", publication);
router.use("/challenge", challenge);
router.use("/auth", authUser);
router.use("/auth", authUser);

module.exports = router;
