// Importing the logEvents function from the logEvents module
const { logEvents } = require('./logEvents');

// Error handling middleware function
const errorHandler = (err, req, res, next) => {
    // Logging the error message to a log file
    logEvents(`${err.name}: ${err.message}`, 'errLog.txt');
    // Logging the error stack to the console
    console.error(err.stack);
    // Sending a 500 Internal Server Error response with the error message
    res.status(500).send(err.message);
}

// Exporting the errorHandler middleware function
module.exports = errorHandler;
