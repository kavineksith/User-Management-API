const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        'message': 'Welcome to User Management System API Portal'
    });
});

router.get('*', (req, res) => {
    if (req.accepts('json')) {
        res.status(404).json({
            'error': 'Page not found'
        });
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;