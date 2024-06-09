// Importing the Express module and creating a router
const express = require('express');
const router = express.Router();

// Importing the userController module
const userController = require('../../controllers/userController.js');

// Route handling for endpoints '/'

// POST request to create a new user
// GET request to retrieve all users
router.route('/')
    .post(userController.createUser) // Create a new user
    .get(userController.readUsers); // Retrieve all users

// Route handling for endpoints '/:id'

// GET request to retrieve a user by ID
// PUT request to update a user by ID
// DELETE request to delete a user by ID
router.route('/:id')
    .get(userController.readUser) // Retrieve a user by ID
    .put(userController.updateUser) // Update a user by ID
    .delete(userController.deleteUser); // Delete a user by ID

// Exporting the router
module.exports = router;
