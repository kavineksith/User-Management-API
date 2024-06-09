// Importing the required modules
const fs = require('fs'); // File system module
const fsPromises = require('fs').promises; // Promisified file system module
const path = require('path'); // Path module

// Function to log events to a file asynchronously
const logEvents = async (message, logName) => {
    try {
        // Check if the 'logs' directory exists, if not, create it
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }

        // Append the message to the specified log file
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), message);
    } catch (err) {
        // Log any errors that occur during logging
        console.log(err);
    }
}

// Middleware function for logging HTTP requests
const logger = (req, res, next) => {
    // Log the request details to the 'reqLog.txt' file
    logEvents(`${new Date().toISOString()} - ${req.method}\t${req.headers.origin}\t${req.originalUrl}\t${req.url}\t${req.ip}\t${req.path}`, 'reqLog.txt');
    // Move to the next middleware function in the stack
    next();
}

// Exporting the logger and logEvents functions
module.exports = { logger, logEvents };
