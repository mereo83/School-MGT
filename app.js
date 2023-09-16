// app.js

const express = require('express');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const fs = require('fs'); // Import the Node.js filesystem module
const app = express();
const port = 7000;


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser()); // Use cookie-parser middleware

// Read data from students.json on server start
const studentsArray = JSON.parse(fs.readFileSync('./data/students.json', 'utf-8'));

// Include route modules
const receptionistRoutes = require('./routes/receptionistRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const principalRoutes = require('./routes/principalRoutes');

// Use route modules
app.use('/receptionist', receptionistRoutes);
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);
app.use('/principal', principalRoutes);

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
