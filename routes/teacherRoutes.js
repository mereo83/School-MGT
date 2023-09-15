const express = require('express');
const router = express.Router();

// Route to update student details by ID (for the teacher role)
router.put('/update/:id', (req, res) => {
  // Check the cookie to enforce the 2-minute timeout here
  const lastAction = req.cookies.last_action;
  const currentTime = new Date().getTime();

  if (!lastAction || currentTime - new Date(lastAction).getTime() > 120000) {
    res.status(401).json({ message: 'Timeout or unauthorized access' });
  } else {
    // Proceed with updating student details here (similar to the studentRoutes.js)
    res.json({ message: 'Updating student details (teacher)' });
  }
});

module.exports = router;
