// routes/receptionistRoutes.js

const express = require('express');
const router = express.Router();
const fs = require('fs'); // Import the Node.js filesystem module

// Receptionist route to register a student
router.post('/register_student', (req, res) => {
  const savedCookie = req.cookies;

  if (savedCookie.status) {
    res.send('A cookie exists, try again after 2 minutes');
  } else {
    // Generate a unique ID for the new student
    const newStudent = {
      Id: studentsArray.length + 1,
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
    };

    studentsArray.push(newStudent);

    // Update students.json with the new data
    fs.writeFileSync('./data/students.json', JSON.stringify(studentsArray), 'utf-8');

    res.cookie('status', 'Done', { maxAge: 20000 });
    res.send('Student registered successfully');
  }
});

// Other routes should also be updated similarly

module.exports = router;
