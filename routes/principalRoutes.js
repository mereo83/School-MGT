// routes/principalRoutes.js

const express = require('express');
const router = express.Router();
const fs = require('fs');

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


// Principal route to view all students
router.get('/all_students', (req, res) => {
  res.json(studentsArray); // Send the entire studentsArray as JSON response
});

// Principal route to view a single student by ID
router.get('/students_details/:studentID', (req, res) => {
  const id = req.params.studentID;
  const foundStudent = studentsArray.find((student) => student.studId === id);

  if (foundStudent) {
    res.json(foundStudent); // Send the found student as JSON response
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

// Principal route to update a student's details by ID
router.put('/update/:studentID', (req, res) => {
  const studentId = req.params.studentID;
  const updatedData = req.body;
  const studentIndex = studentsArray.findIndex((student) => student.studId === studentId);

  if (studentIndex !== -1) {
    studentsArray[studentIndex] = { ...studentsArray[studentIndex], ...updatedData };

    // Update students.json with the updated data
    fs.writeFileSync('./data/students.json', JSON.stringify(studentsArray), 'utf-8');

    res.json({ message: 'Student details updated successfully' });
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

module.exports = router;
