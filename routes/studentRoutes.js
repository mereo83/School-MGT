const express = require('express');
const router = express.Router();

// Data storage (for demonstration purposes)
const students = [];

// Student route to view their own details by ID
router.get('/:id', (req, res) => {
  const studentId = req.params.id; // Move this line inside the route handler function
  const student = students.find((s) => s.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

module.exports = router;
