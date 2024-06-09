// Importing the required functions from the express-validator module
const { validationResult, check } = require('express-validator');

// Middleware function to handle input validation
const validateInput = [
    // Validation checks for each input field
    check('id').notEmpty().withMessage('ID is required'),
    check('fname').notEmpty().withMessage('First name is required'),
    check('lname').notEmpty().withMessage('Last name is required'),
    check('dateOfBirth').notEmpty().withMessage('Date of birth is required'),
    check('address').notEmpty().withMessage('Address is required'),
    check('emailAddress').notEmpty().withMessage('Email address is required').isEmail().withMessage('Invalid email address'),
    check('contactNumber').notEmpty().withMessage('Contact number is required'),
    check('country').notEmpty().withMessage('Country is required'),
    // Custom middleware to handle validation errors
    (req, res, next) => {
        // Extract validation errors from the request
        const errors = validationResult(req);
        // If there are validation errors, pass them to the next middleware or route handler
        if (!errors.isEmpty()) {
            return next({ status: 400, errors: errors.array() });
        }
        // If validation passes, proceed to the next middleware or route handler
        next();
    }
];

// Exporting the validateInput middleware function
module.exports = {
    validateInput
};
