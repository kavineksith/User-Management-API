# **User Management API Documentation**

Welcome to the User Management API documentation. This API allows you to manage user data, including creating, reading, updating, and deleting user records. The API provides endpoints for performing CRUD operations on user data stored in a database.

## **Getting Started**

To get started with the User Management API, follow the steps below:

1. Clone the repository containing the API source code.
   ```
   git clone https://github.com/kavineksith/User-Management-API.git
   ```
2. Navigate to the User-Management-API project directory:
   ```
   cd User-Management-API-with-Node-JS
   ```

3. Install the required dependencies by running `npm install`.
   ```
   npm install
   ```

4. Database Initialization
   - Ensure SQLite is installed on your system.
   - Run the following command to initialize the database:
     ```
     node ./data/database.js
     ```

5. Start the server by running `node app.js`.
   ```
   node app.js
   ```

### **Used Technologies**

- Node JS Runtime Environment
- Express JS Framework
- SQLite3 Database

### **API Documentation**

#### **Base URL**

The API server will start running locally on `http://localhost:8080/`.

## **Endpoints**

The User Management API provides the following endpoints:

### **Root Endpoint**

- **GET /:** Retrieves a welcome message indicating the API portal for the User Management System.

### **User Endpoints**

- **POST /api/users:** Creates a new user record.
- **GET /api/users:** Retrieves all user records.
- **GET /api/users/:id:** Retrieves a specific user record by ID.
- **PUT /api/users/:id:** Updates an existing user record by ID.
- **DELETE /api/users/:id:** Deletes a user record by ID.

### **Error Handling**

The API handles errors gracefully and provides meaningful error messages to the client.

- If an endpoint is accessed that does not exist, a 404 error with a "Page not found" message is returned.
- If a request is made with invalid input data, a 400 error with details about the validation errors is returned.

## **Middleware**

The User Management API utilizes middleware functions to enhance functionality and provide additional features such as logging, CORS handling, request limiting, and input validation.

### **Middleware Functions**

1. **Request Logger Middleware**: Logs details about incoming HTTP requests, including method, origin, URL, IP address, and path.
2. **Error Logger Middleware**: Logs errors that occur during API operations to a designated log file.
3. **CORS (Cross-Origin Resource Sharing) Middleware**: Handles Cross-Origin Resource Sharing by allowing only specified origins to access the API.
4. **Request Rate Limiter Middleware**: Limits the number of requests that can be made to the API within a certain time frame to prevent abuse.
5. **Input Validation Middleware**: Validates input data for incoming requests to ensure data integrity and prevent malicious or erroneous input.

## **Database**

The User Management API uses an SQLite database to store user data. The database schema includes the following columns:

- `userID`: Unique identifier for each user (primary key).
- `fname`: First name of the user.
- `lname`: Last name of the user.
- `dateOfBirth`: Date of birth of the user.
- `address`: Address of the user.
- `emailAddress`: Email address of the user.
- `contactNumber`: Contact number of the user.
- `country`: Country of the user.

## **Sample Usage**

Below is an example of how to use the User Management API endpoints:

### **Creating a User**

```http
POST /api/users
Content-Type: application/json

{
  "fname": "John",
  "lname": "Doe",
  "dateOfBirth": "1990-05-15",
  "address": "123 Main St",
  "emailAddress": "john.doe@example.com",
  "contactNumber": "+1234567890",
  "country": "USA"
}
```

### **Retrieving All Users**

```http
GET /api/users
```

### **Retrieving a Specific User**

```http
GET /api/users/1
```

### **Updating a User**

```http
PUT /api/users/1
Content-Type: application/json

{
  "fname": "Jane",
  "lname": "Doe"
}
```

### **Deleting a User**

```http
DELETE /api/users/1
```

## **Conclusion**

The User Management API provides a robust solution for managing user data with comprehensive middleware functionality, error handling, and database integration. It offers a simple and intuitive interface for performing CRUD operations on user records. For more information and detailed usage instructions, refer to the documentation above.

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### **Disclaimer:**
Kindly note that this project is developed solely for educational purposes, not intended for industrial use, as its sole intention lies within the realm of education. We emphatically underscore that this endeavor is not sanctioned for industrial application. It is imperative to bear in mind that any utilization of this project for commercial endeavors falls outside the intended scope and responsibility of its creators. Thus, we explicitly disclaim any liability or accountability for such usage.
