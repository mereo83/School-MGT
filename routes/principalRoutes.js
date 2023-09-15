const express = require('express');
const router = express.Router();

// Route to view principal details
router.get('/view', (req, res) => {
  // Check the cookie to enforce the 2-minute timeout here
  const lastAction = req.cookies.last_action;
  const currentTime = new Date().getTime();

  if (!lastAction || currentTime - new Date(lastAction).getTime() > 120000) {
    res.status(401).json({ message: 'Timeout or unauthorized access' });
  } else {
    // Proceed with viewing principal details here
    res.json({ message: 'Viewing principal details' });
  }
});

// Route to update principal details
router.put('/update', (req, res) => {
  // Check the cookie to enforce the 2-minute timeout here
  const lastAction = req.cookies.last_action;
  const currentTime = new Date().getTime();

  if (!lastAction || currentTime - new Date(lastAction).getTime() > 120000) {
    res.status(401).json({ message: 'Timeout or unauthorized access' });
  } else {
    // Proceed with updating principal details here
    res.json({ message: 'Updating principal details' });
  }
});

// Route to delete a student (for the principal role)
router.delete('/delete/:id', (req, res) => {
  // Check the cookie to enforce the 2-minute timeout here
  const lastAction = req.cookies.last_action;
  const currentTime = new Date().getTime();

  if (!lastAction || currentTime - new Date(lastAction).getTime() > 120000) {
    res.status(401).json({ message: 'Timeout or unauthorized access' });
  } else {
    // Proceed with deleting a student here (similar to the studentRoutes.js)
    res.json({ message: 'Deleting a student (principal)' });
  }
});

module.exports = router;
