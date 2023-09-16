// routes/teacherRoutes.js

const express = require('express');
const router = express.Router();
const fs = require('fs');

// Read data from students.json on server start
const studentsArray = JSON.parse(fs.readFileSync('./data/students.json', 'utf-8'));

// Teacher route to update a student's details by ID
router.put('/update/:id', (req, res) => {
  const studentId = req.params.id;
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
