const router = require('express').Router();
const userController = require('./users.controllers')

/* router.get('/', userController.findAllUserController); */
router.post('/create', userController.createUserController);

module.exports = router;
