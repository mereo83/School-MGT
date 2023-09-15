const express = require('express');
const router = express.Router();

// Data storage for students (for demonstration purposes)
const studentsArray = [
 
];

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
    res.json({ message: 'Student details updated successfully' });
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

// Principal route to delete a student by ID
router.delete('/delete/:studentID', (req, res) => {
  const studentId = req.params.studentID;
  const studentIndex = studentsArray.findIndex((student) => student.studId === studentId);

  if (studentIndex !== -1) {
    studentsArray.splice(studentIndex, 1);
    res.json({ message: 'Student deleted successfully' });
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});

module.exports = router;
