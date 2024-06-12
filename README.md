# Objective

Review basic CRUD operations using Mongoose.
Perform more complex queries and updates.
Learn to handle validation and errors more effectively.

# Instructions
## Part 1: Set Up the Project
### Initialize the Project and Install Dependencies:

mkdir express-mongodb-advanced
cd express-mongodb-advanced
npm init -y
npm install express mongoose  
  ![alt text](./documentation/image.png)

### Create the Server:

Create a file named index.js and set up a basic Express server with Mongoose connection.  
  ![alt text](./documentation/image-1.png)  
  ![alt text](./documentation/image-2.png)

## Part 2: Define the Schema and Model
### Create models/User.js:

Define a user schema with the following fields: name, email, age, and isActive.  
  ![alt text](./documentation/image-3.png)

## Part 3: Create and Read Users
### Update index.js to include routes for creating and reading users:

Route to add a new user (POST /users).  
  ![alt text](./documentation/image-4.png)

Route to get all users (GET /users).  
  ![alt text](./documentation/image-5.png)

Route to get active users (GET /users/active).  
  ![alt text](./documentation/image-6.png)

## Part 4: Test Create and Read Operations
### Start Your Server:

npm run dev  
  ![alt text](./documentation/image-7.png)

### Test with Thunder Client or Postman:

Create a User:

Method: POST
URL: http://localhost:3000/users
Body: JSON
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}  
  ![alt text](./documentation/image-8.png)

Get All Users:

Method: GET
URL: http://localhost:3000/users  
  ![alt text](./documentation/image-9.png)

Get Active Users:

Method: GET
URL: http://localhost:3000/users/active  
  ![alt text](./documentation/image-10.png)

## Part 5: Update and Delete Users
### Update index.js to include update and delete routes:

Route to update a user (PUT /users/:id).  
  ![alt text](./documentation/image-11.png)

Route to deactivate a user (PUT /users/:id/deactivate).  
  ![alt text](./documentation/image-12.png)

Route to delete a user (DELETE /users/:id).  
  ![alt text](./documentation/image-13.png)

## Part 6: Test Update and Delete Operations
### Start Your Server:

npm run dev

### Test with Thunder Client or Postman:

Update a User:

Method: PUT
URL: http://localhost:3000/users/<user-id>
Body: JSON
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 28
}  
  ![alt text](./documentation/image-14.png)

Deactivate a User:

Method: PUT
URL: http://localhost:3000/users/<user-id>/deactivate  
  ![alt text](./documentation/image-15.png)

Delete a User:

Method: DELETE
URL: http://localhost:3000/users/<user-id>  
  ![alt text](./documentation/image-16.png)  
  ![alt text](./documentation/image-17.png)

# Submission
GitHub Repository: Create a new repository named express-mongodb-advanced. Push your project to the repository and submit the URL. Ensure it includes all necessary files to run the server, including the README.md.
Screenshots: Include the screenshots of your POST, GET, PUT, and DELETE requests in the README.md.8