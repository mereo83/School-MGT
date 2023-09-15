const express = require('express');
const router = express.Router();

// Data storage (for demonstration purposes)
const studentsArray = [];

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
  res.json({ message: 'Student registered successfully' });
});

module.exports = router;
