const express = require("express");
const router = express.Router();
const {login, register} = require("../controllers/authController");

router.post("/login", login);
router.post("/user", register);

module.exports = router;