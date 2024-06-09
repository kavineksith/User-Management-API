// Importing the Express module and creating a router
const express = require('express');
const router = express.Router();

// Route to handle requests to the root endpoint '/'
router.get('/', (req, res) => {
    // Respond with a JSON message indicating the welcome message
    res.status(200).json({
        'message': 'Welcome to User Management System API Portal'
    });
});

// Route to handle any other unmatched routes
router.get('*', (req, res) => {
    // Check if the client accepts JSON
    if (req.accepts('json')) {
        // Respond with a JSON error message for a 404 status code
        res.status(404).json({
            'error': 'Page not found'
        });
    } else {
        // If client does not accept JSON, respond with a 404 status code without a body
        res.sendStatus(404);
    }
});

// Exporting the router
module.exports = router;
