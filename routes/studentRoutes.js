// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const fs = require('fs'); // Import the Node.js filesystem module

// Read data from students.json on server start
const studentsArray = JSON.parse(fs.readFileSync('./data/students.json', 'utf-8'));

// SSR route
router.get('/ssr', (req, res) => {
  const data = {
    message: 'This is SSR data!',
  };

  // Render the EJS template with data
  res.render('home', data);
});

router.get('/dashboard', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});


// Student route to view their own details by ID
router.get('/view/:studentID', (req, res) => {
  const studentId = req.params.studentID;
  const foundStudent = studentsArray.find((student) => student.studId === studentId);

  if (foundStudent) {
    res.json(foundStudent); // Send the found student as JSON response
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

// Route to register a new student
router.post('/register', (req, res) => {
  const newStudent = {
    studId: req.body.studId,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email,
  };

  studentsArray.push(newStudent);

  // Update students.json with the new data
  fs.writeFileSync('./data/students.json', JSON.stringify(studentsArray), 'utf-8');

  res.json({ message: 'Student registered successfully' });
});

module.exports = router;
