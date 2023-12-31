# School-MGT
This project is designed to manage student data with role-specific routes for different users (receptionist, student, teacher, principal), and it uses middleware for various tasks such as data validation and handling cookies. The comments help provide a clear understanding of each route's purpose and the overall structure of the application.

### `receptionistRoutes.js`

1. **Import Dependencies**: This comment signifies the start of the route file and is a reminder that dependencies need to be imported.

2. **Initialize Express Router**: Express Router is initialized to create routes specific to the receptionist role.

3. **Middleware Import**: Import the `registerStudentMiddleware` middleware. This middleware likely handles student registration-related logic.

4. **Data Import**: Import the `studentsArray` from the 'studentArray.js' or 'students.json' file. This is the data source for student-related operations.

5. **Student Registration Route**: This route is for registering a new student. The middleware `registerStudentMiddleware` may be used to validate and process the student's data.

6. **Check Existing Cookie**: Check if a cookie exists to prevent multiple registrations in a short time.

7. **Generate New Student Data**: Create a new student object with data from the request body.

8. **Push New Student Data**: Add the new student data to the `studentsArray`.

9. **Set Cookie**: Set a cookie to prevent multiple registrations.

10. **View Students Route**: This route is for viewing all registered students.

### `studentRoutes.js`

1. **Initialize Express Router**: Express Router is initialized to create routes specific to the student role.

2. **Data Import**: Import the `studentsArray` from the 'studentArray.js' or 'students.json' file. This is the data source for student-related operations.

3. **View Student Details by ID Route**: This route allows a student to view their own details by providing their student ID.

4. **Register New Student Route**: This route allows the registration of a new student by providing their details in the request body.

### `teacherRoutes.js`

1. **Initialize Express Router**: Express Router is initialized to create routes specific to the teacher role.

2. **Data Import**: Import the `studentsArray` from the 'studentArray.js' or 'students.json' file. This is the data source for teacher-related operations.

3. **Update Student Details by ID Route**: This route allows a teacher to update a student's details by providing the student's ID in the URL and updated data in the request body.

### `principalRoutes.js`

1. **Initialize Express Router**: Express Router is initialized to create routes specific to the principal role.

2. **Data Import**: Import the `studentsArray` from the 'studentArray.js' or 'students.json' file. This is the data source for principal-related operations.

3. **View All Students Route**: This route allows the principal to view details of all registered students.

4. **View Student Details by ID Route**: This route allows the principal to view details of a specific student by providing their ID in the URL.

5. **Update Student Details by ID Route**: This route allows the principal to update a student's details by providing the student's ID in the URL and updated data in the request body.

6. **Delete Student by ID Route**: This route allows the principal to delete a student's data by providing the student's ID in the URL.

### `app.js`

1. **Express App Initialization**: The Express app is initialized here, setting up the foundation for the web application.

2. **Middleware Setup**: Middleware such as `express.json()` and `cookie-parser` is applied to the app to handle JSON data and cookies.

3. **Route Module Import**: Route modules for different roles (receptionist, student, teacher, principal) are imported to be used in the app.

4. **Route Usage**: The imported route modules are used to define the routes for each role. The app uses the routes with the corresponding prefixes ('/receptionist', '/student', '/teacher', '/principal').

5. **Server Startup**: The Express app is configured to listen on a specific port (e.g., port 7000) to start the server.


If data persistence becomes an  issue, you'll want to implement a way to store and retrieve data between server restarts. In a typical development scenario, you might use a database like MongoDB or PostgreSQL for this purpose. However, for a simple demonstration or learning project, you can store data in a JSON file.

Here's how you can modify your code to persist data to a JSON file:

Create a Data Directory: First, create a directory in your project where you'll store your data files. For example, you can create a directory named data.

Create a JSON Data File: Inside the data directory, create a JSON file, e.g., students.json, where you'll store the student data. You can initially populate this file with an empty array [].

Read Data on Server Start: Modify your Express app to read data from this JSON file when the server starts. This ensures that your studentsArray is populated with the existing data:


 You can use Thunder Client or Postman to test the routes by sending various HTTP requests. Here are the syntax and examples for testing the routes :

**1. Receptionist Routes**

- Register a Student:
  - Method: POST
  - URL: http://localhost:7000/receptionist/register_student
  - Body (JSON):
    ```json
    {
      "name": "John Doe",
      "age": 18,
      "gender": "Male",
      "email": "john@example.com"
    }
    ```

**2. Principal Routes**

- View All Students:
  - Method: GET
  - URL: http://localhost:7000/principal/all_students

- View a Single Student (replace `studentID` with the actual student ID):
  - Method: GET
  - URL: http://localhost:7000/principal/students_details/studentID

- Update a Student's Details (replace `studentID` with the actual student ID):
  - Method: PUT
  - URL: http://localhost:7000/principal/update/studentID
  - Body (JSON):
    ```json
    {
      "name": "Updated Name",
      "age": 20
    }
    ```

- Delete a Student (replace `studentID` with the actual student ID):
  - Method: DELETE
  - URL: http://localhost:7000/principal/delete/studentID

**3. Teacher Routes**

- Update a Student's Details by ID (replace `studentID` with the actual student ID):
  - Method: PUT
  - URL: http://localhost:7000/teacher/update/studentID
  - Body (JSON):
    ```json
    {
      "name": "Updated Name",
      "age": 20
    }
    ```

**4. Student Routes**

- View Student Details by ID (replace `studentID` with the actual student ID):
  - Method: GET
  - URL: http://localhost:7000/student/view/studentID

- Register as a New Student:
  - Method: POST
  - URL: http://localhost:7000/student/register
  - Body (JSON):
    ```json
    {
      "studId": "S001",
      "name": "Your Name",
      "age": 18,
      "gender": "Male",
      "email": "your.email@example.com"
    }
    ```

Please note that you should replace `studentID` with the actual student ID when testing the routes that require it. Additionally, make sure that your Express application is running and listening on port 7000 as specified in your code.