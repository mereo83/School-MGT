const express = require('express');
const router = express.Router();
const registerStudent = require('../middleware/registerStudentMiddleware'); // Import the middleware
const studentsArray = require('../data/studentArray'); // Import the studentsArray

// Receptionist route to register a student
router.post('/register_student', registerStudent, (req, res) => {
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
    res.cookie('status', 'Done', { maxAge: 20000 });
    res.send('Student registered successfully'); // Send a success message
  }
});

router.get('/view_students', (req, res) => {
  res.json(studentsArray);
});

module.exports = router;
