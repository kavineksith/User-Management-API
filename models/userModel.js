const db = require('../data/database.js');

const createUser = async (userData) => {
    try {
        const {
            fname,
            lname,
            dateOfBirth,
            address,
            emailAddress,
            contactNumber,
            country
        } = userData;

        let query = 'INSERT INTO users (fname, lname, dateOfBirth, address, emailAddress, contactNumber, country) VALUES (?,?,?,?,?,?,?)';
        let values = [fname, lname, dateOfBirth, address, emailAddress, contactNumber, country];

        await db.run(query, values);
        return { message: "User Information stored successfully...!!" };
    } catch (error) {
        throw error; // This will handle database errors
    }
};

const readUsers = async () => {
    try {
        let query = "SELECT * FROM users";
        const rows = await db.all(query);
        return rows;
    } catch (error) {
        throw error;
    }
};

const readUser = async (id) => {
    try {
        let query = "SELECT * FROM users WHERE userID = ?";
        const rows = await db.all(query, [id]);
        return rows[0]; // Return the first row or null if not found
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, userData) => {
    try {
        const {
            fname,
            lname,
            dateOfBirth,
            address,
            emailAddress,
            contactNumber,
            country
        } = userData;

        let query = 'UPDATE users SET fname=?, lname=?, dateOfBirth=?, address=?, emailAddress=?, contactNumber=?, country=? WHERE userID=?';
        let values = [fname, lname, dateOfBirth, address, emailAddress, contactNumber, country, id];

        const result = await db.run(query, values);
        if (result.changes === 0) {
            return null; // Indicates user not found
        }
        return { message: "User Information modified successfully...!!" };
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        let query = "DELETE FROM users WHERE userID = ?";
        const result = await db.run(query, [id]);
        if (result.changes === 0) {
            return null; // Indicates user not found
        }
        return { message: "User Information removed successfully...!!" };
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUser,
    readUsers,
    readUser,
    updateUser,
    deleteUser
};
