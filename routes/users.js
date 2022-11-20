const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller");


router.get('/', userController.findAllUsers);
router.post('/create', userController.createUser);
router.get('/user/:id', userController.findUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;