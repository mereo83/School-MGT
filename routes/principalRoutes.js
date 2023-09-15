const express = require('express');
const router = express.Router();

// Data storage (for demonstration purposes)
const students = [];

// Principal route to view students
router.get('/view', (req, res) => {
  res.json({ students });
});

// Principal route to update a student's details by ID
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

// Principal route to delete a student by ID
router.delete('/delete/:id', (req, res) => {
  const studentId = req.params.id;
  const studentIndex = students.findIndex((s) => s.id === studentId);

  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    res.json({ message: 'Student deleted successfully' });
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

module.exports = router;
