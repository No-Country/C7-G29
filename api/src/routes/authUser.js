const express = require('express');
const { singIn, singUp } = require('../controllers/auth.controller');

const router = express.Router();

router.post("/singIn", singIn);
router.post("/singUp", singUp);

module.exports = router;