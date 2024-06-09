// Importing the express-rate-limit module
const rateLimit = require("express-rate-limit");

// Creating a rate limiter middleware
const limiter = rateLimit({
    // Set the time window for limiting requests to 15 minutes (in milliseconds)
    windowMs: 15 * 60 * 1000, // 15 minutes
    // Set the maximum number of requests allowed per IP address within the time window
    max: 100, // limit each IP to 100 requests per windowMs
    // Custom message to be sent in the response when the limit is exceeded
    message: 'Too many requests, please try again later'
});

// Exporting the rate limiter middleware
module.exports = limiter;
