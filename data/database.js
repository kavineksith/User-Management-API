// Importing SQLite3 module
const sqlite3 = require('sqlite3').verbose();

// Database source path
const DBSOURCE = "./userDB.db";

// SQL query to create the users table with not null constraints
const query = `CREATE TABLE users (
    userID INTEGER PRIMARY KEY AUTOINCREMENT,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    dateOfBirth TEXT NOT NULL,
    address TEXT NOT NULL,
    emailAddress TEXT NOT NULL,
    contactNumber TEXT NOT NULL,
    country TEXT NOT NULL
    )`;

// Creating a new SQLite3 database instance
const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Handle database connection error
        console.error(err.message);
        throw err;
    } else {
        // Log successful connection
        console.log('Connected to the DataBase.');

        // Execute the create table query
        db.run(query, (err) => {
            if (err) {
                // Handle table creation error (if table already exists)
                // console.log('Table already exists..!!');
            } else {
                // Log successful table creation
                console.log('Table has been created..!!');
            }
        });
    }
});

// Exporting the database instance
module.exports = db;
