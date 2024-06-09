// Importing required modules
const express = require('express'); // Express framework for Node.js
const { request, response } = require('express'); // Destructuring request and response from express
const bodyParser = require('body-parser'); // Middleware to parse incoming request bodies
const helmet = require('helmet'); // Middleware for securing HTTP headers
const cors = require('cors'); // Middleware for enabling Cross-Origin Resource Sharing
const limiter = require('./middleware/requestLimiter.js'); // Custom middleware for rate limiting requests
const corsOptions = require('./middleware/corsOptions.js'); // Custom middleware for CORS options
const { logger } = require('./middleware/eventLogger.js'); // Custom middleware for logging events
const errorHandler = require('./middleware/errorLogger.js'); // Custom middleware for handling errors

// Defining hostname and port
const hostname = '127.0.0.1';
const port = 8080;

// Creating an Express application instance
const app = express();

// Middleware to parse URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

// Middleware for handling CORS requests using predefined options
app.use(cors(corsOptions));

// Middleware for rate limiting requests
app.use(limiter);

// Middleware for setting various HTTP headers for security
app.use(helmet());

// Middleware for logging events
app.use(logger);

// Middleware for handling errors
app.use(errorHandler);

// Routing for the root endpoint
app.use('/home', require('./routes/root.js'));

// Routing for the '/api/users' endpoint
app.use('/api/users', require('./routes/api/users.js'));

// Starting the server and listening for requests
app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`);
});
