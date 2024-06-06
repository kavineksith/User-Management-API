const { validationResult, check } = require('express-validator');

// Middleware to handle input validation
const validateInput = [
    check('id').notEmpty().withMessage('ID is required'),
    check('fname').notEmpty().withMessage('First name is required'),
    check('lname').notEmpty().withMessage('Last name is required'),
    check('dateOfBirth').notEmpty().withMessage('Date of birth is required'),
    check('address').notEmpty().withMessage('Address is required'),
    check('emailAddress').notEmpty().withMessage('Email address is required').isEmail().withMessage('Invalid email address'),
    check('contactNumber').notEmpty().withMessage('Contact number is required'),
    check('country').notEmpty().withMessage('Country is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next({ status: 400, errors: errors.array() }); // Pass errors to the next middleware or route handler
        }
        next(); // Proceed to the next middleware or route handler if validation passes
    }
];

module.exports = {
    validateInput
};
