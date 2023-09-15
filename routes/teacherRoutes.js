const express = require('express');
const router = express.Router();

// Data storage (for demonstration purposes)
const studentsArray = [];

// Teacher route to update a student's details by ID
router.put('/update/:studentID', (req, res) => {
  const studentId = req.params.studentID;
  const updatedData = req.body;
  const studentIndex = studentsArray.findIndex((student) => student.studId === studentId);

  if (studentIndex !== -1) {
    studentsArray[studentIndex] = { ...studentsArray[studentIndex], ...updatedData };
    res.json({ message: 'Student details updated successfully' });
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

module.exports = router;
