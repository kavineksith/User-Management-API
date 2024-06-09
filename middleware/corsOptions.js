// Array of whitelisted origins
const whitelist = ['http://127.0.0.1:8080', 'http://localhost:8080'];

// CORS options object
const corsOptions = {
    // Origin callback function to check if the request origin is allowed
    origin: (origin, callback) => {
        // If the origin is in the whitelist or it's absent (for requests from file://)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error('Not allowed by CORS')); // Deny the request
        }
    },
    // Allowed HTTP methods
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // Allowed headers in the request
    allowedHeaders: ['Authorization', 'Content-Type'],
    // Disable preflight requests continuing to the route handler
    preflightContinue: false,
    // HTTP status code for successful OPTIONS requests
    optionsSuccessStatus: 204,
    // Maximum age (in seconds) of the CORS-related preflight request cache
    maxAge: 86400 // 1 day
};

// Exporting the CORS options object
module.exports = corsOptions;
