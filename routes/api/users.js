const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController.js');

router.route('/')
    .post(userController.createUser)
    .get(userController.readUsers);

router.route('/:id')
    .get(userController.readUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;