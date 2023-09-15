const express = require('express');
const router = express.Router();

// Data storage (for demonstration purposes)
const students = [];

// Receptionist route to register a new student with a 2-minute delay using cookies
router.post('/register', async (req, res) => {
  try {
    const student = req.body;

    // Check if the cookie is set to delay registration
    if (req.cookies.registrationDelay) {
      res.status(403).json({ error: 'Registration is delayed' });
    } else {
      // Set a cookie to delay registration
      res.cookie('registrationDelay', true, { maxAge: 120000 }); // 2 minutes in milliseconds
      students.push(student);
      res.status(201).json({ message: 'Student registered successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
