const router = require("express").Router();
const authController = require("./auth.controllers");

router.post("/login", authController.loginController);

module.exports = router;
