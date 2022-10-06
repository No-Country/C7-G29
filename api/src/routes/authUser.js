const express = require('express');
const { singIn, singUp } = require('../controllers/auth.controller');
const {verifyToken} = require('../middlewares/auth.middleware')

const router = express.Router();

router.post("/singIn", singIn);
router.post("/singUp", singUp);
router.get("/loged", verifyToken);

module.exports = router;