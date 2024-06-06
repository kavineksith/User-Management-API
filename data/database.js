const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "./userDB.db"

const query = `CREATE TABLE users (
    userID INTEGER PRIMARY KEY AUTOINCREMENT,
    fname text,
    lname text,
    dateOfBirth text,
    address text,
    emailAddress text,
    contactNumber text,
    country text
    )`

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err;
    } else {
        console.log('Connected to the DataBase.');
        db.run(query, (err) => {
            if (err) {
                // console.log('Table already exists..!!');
            } else {
                console.log('Table has been created..!!');
            }
        })
    }
});

module.exports = db;