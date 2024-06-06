const db = require('../data/database.js');
const { validateInput } = require('./middleware/validateInputs.js');
const { check } = require('express-validator');

// Post Method (Insert data into database)
const createUser = ([
    check('fname').notEmpty().withMessage('First name is required'),
    check('lname').notEmpty().withMessage('Last name is required'),
    check('dateOfBirth').notEmpty().withMessage('Date of birth is required'),
    check('address').notEmpty().withMessage('Address is required'),
    check('emailAddress').notEmpty().withMessage('Email address is required').isEmail().withMessage('Invalid email address'),
    check('contactNumber').notEmpty().withMessage('Contact number is required'),
    check('country').notEmpty().withMessage('Country is required')
], validateInput, (req, res, next) => {
    try {
        const {
            fname,
            lname,
            dateOfBirth,
            address,
            emailAddress,
            contactNumber,
            country
        } = req.body;

        let query = 'INSERT INTO users (fname, lname, dateOfBirth, address, emailAddress, contactNumber, country)VALUES(?,?,?,?,?,?,?)';
        let values = [fname, lname, dateOfBirth, address, emailAddress, contactNumber, country];

        db.run(query, values, function (err) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            } else {
                res.status(201).json({
                    "message": "User Information stored successfully...!!"
                })
            }
        });
    } catch (E) {
        res.status(400).send(E);
    }
});

// Get Method (retrive data from database)
const readUsers = (req, res, next) => {
    try {
        let query = "SELECT * FROM users";

        db.all(query, function (err, rows) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            } else {
                res.status(201).json({
                    "data": rows
                })
            }
        });
    } catch (E) {
        res.status(400).send(E);
    }
};

// Get Method (retrive data from database within specific users from User ID)
const readUser = ([
    check('id').notEmpty().withMessage('ID is required')
], validateInput, (req, res, next) => {
    try {
        const { id } = req.params.id;
        let query = "SELECT * FROM users WHERE userID = ?";
        let params = [id];

        db.all(query, params, function (err, rows) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            } else {
                res.status(201).json({
                    "data": rows
                })
            }
        });
    } catch (E) {
        res.status(400).send(E);
    }
});

// Put Method (updating data from database within specific users from User ID)
const updateUser = ([
    check('id').notEmpty().withMessage('ID is required'),
    check('fname').notEmpty().withMessage('First name is required'),
    check('lname').notEmpty().withMessage('Last name is required'),
    check('dateOfBirth').notEmpty().withMessage('Date of birth is required'),
    check('address').notEmpty().withMessage('Address is required'),
    check('emailAddress').notEmpty().withMessage('Email address is required').isEmail().withMessage('Invalid email address'),
    check('contactNumber').notEmpty().withMessage('Contact number is required'),
    check('country').notEmpty().withMessage('Country is required')
], validateInput, (req, res, next) => {
    try {
        const {
            id
        } = req.params.id;
        const {
            fname,
            lname,
            dateOfBirth,
            address,
            emailAddress,
            contactNumber,
            country
        } = req.body;

        let query = 'UPDATE users SET fname=?, lname=?, dateOfBirth=?, address=?, emailAddress=?, contactNumber=?, country=? WHERE userID=?';
        let values = [fname, lname, dateOfBirth, address, emailAddress, contactNumber, country, id];

        db.run(query, values, function (err) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            } else {
                res.status(201).json({
                    "message": "User Information modified successfully...!!",
                    updated: this.changes
                })
            }
        });
    } catch (E) {
        res.status(400).send(E);
    }
});

// Delete Method (removing data from database within specific users from User ID)
const deleteUser = ([
    check('id').notEmpty().withMessage('ID is required')
], validateInput, (req, res, next) => {
    try {
        let query = "DELETE FROM users WHERE userID = ?";
        let params = [id];

        db.run(query, params, function (err) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            } else {
                res.status(201).json({
                    "message": "User Information removed successfully...!!",
                    updated: this.changes
                })
            }
        });
    } catch (E) {
        res.status(400).send(E);
    }
});

module.exports = {
    createUser,
    readUsers,
    readUser,
    updateUser,
    deleteUser
};