// Importing the database module
const db = require('../data/database.js');

// Function to create a new user
const createUser = async (userData) => {
    try {
        // Destructuring user data
        const {
            fname,
            lname,
            dateOfBirth,
            address,
            emailAddress,
            contactNumber,
            country
        } = userData;

        // SQL query to insert user data into the database
        let query = 'INSERT INTO users (fname, lname, dateOfBirth, address, emailAddress, contactNumber, country) VALUES (?,?,?,?,?,?,?)';
        let values = [fname, lname, dateOfBirth, address, emailAddress, contactNumber, country];

        // Executing the query asynchronously
        await db.run(query, values);

        // Returning success message if the operation is successful
        return { message: "User Information stored successfully...!!" };
    } catch (error) {
        // Throwing error to handle database errors
        throw error;
    }
};

// Function to read all users from the database
const readUsers = async () => {
    try {
        // SQL query to select all users from the database
        let query = "SELECT * FROM users";

        // Executing the query asynchronously and returning the result
        const rows = await db.all(query);
        return rows;
    } catch (error) {
        throw error;
    }
};

// Function to read a specific user by ID from the database
const readUser = async (id) => {
    try {
        // SQL query to select a user by ID from the database
        let query = "SELECT * FROM users WHERE userID = ?";

        // Executing the query asynchronously and returning the result
        const rows = await db.all(query, [id]);
        return rows[0]; // Return the first row or null if not found
    } catch (error) {
        throw error;
    }
};

// Function to update a user's information in the database
const updateUser = async (id, userData) => {
    try {
        // Destructuring user data
        const {
            fname,
            lname,
            dateOfBirth,
            address,
            emailAddress,
            contactNumber,
            country
        } = userData;

        // SQL query to update user data in the database
        let query = 'UPDATE users SET fname=?, lname=?, dateOfBirth=?, address=?, emailAddress=?, contactNumber=?, country=? WHERE userID=?';
        let values = [fname, lname, dateOfBirth, address, emailAddress, contactNumber, country, id];

        // Executing the query asynchronously
        const result = await db.run(query, values);

        // Checking if any changes were made, if not, user not found
        if (result.changes === 0) {
            return null; // Indicates user not found
        }
        
        // Returning success message if the operation is successful
        return { message: "User Information modified successfully...!!" };
    } catch (error) {
        throw error;
    }
};

// Function to delete a user from the database by ID
const deleteUser = async (id) => {
    try {
        // SQL query to delete a user from the database by ID
        let query = "DELETE FROM users WHERE userID = ?";

        // Executing the query asynchronously
        const result = await db.run(query, [id]);

        // Checking if any changes were made, if not, user not found
        if (result.changes === 0) {
            return null; // Indicates user not found
        }

        // Returning success message if the operation is successful
        return { message: "User Information removed successfully...!!" };
    } catch (error) {
        throw error;
    }
};

// Exporting functions to be used externally
module.exports = {
    createUser,
    readUsers,
    readUser,
    updateUser,
    deleteUser
};
