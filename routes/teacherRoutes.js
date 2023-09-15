const express = require('express');
const router = express.Router();

// Data storage (for demonstration purposes)
const students = [];

// Teachers route to update a student's details by ID
router.put('/update/:id', (req, res) => {
  const studentId = req.params.id;
  const updatedData = req.body;
  const studentIndex = students.findIndex((s) => s.id === studentId);

  if (studentIndex !== -1) {
    students[studentIndex] = { ...students[studentIndex], ...updatedData };
    res.json({ message: 'Student details updated successfully' });
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

module.exports = router;
