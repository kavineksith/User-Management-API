const UserModel = require('../models/userModel.js');
const { validationResult } = require('express-validator');
const { validateInput } = require('./middleware/validateInputs.js');

// Controller function to create a user
const createUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const result = await UserModel.createUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to retrieve all users
const readUsers = async (req, res, next) => {
    try {
        const users = await UserModel.readUsers();
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to retrieve a user by ID
const readUser = async (req, res, next) => {
    try {
        const user = await UserModel.readUser(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to update a user by ID
const updateUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const result = await UserModel.updateUser(req.params.id, req.body);
        if (!result) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to delete a user by ID
const deleteUser = async (req, res, next) => {
    try {
        const result = await UserModel.deleteUser(req.params.id);
        if (!result) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    readUsers,
    readUser,
    updateUser,
    deleteUser
};
