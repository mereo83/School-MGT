const express = require('express');
const router = express.Router();

// Route to view student details
router.get('/view', (req, res) => {
  // Check the cookie to enforce the 2-minute timeout here
  const lastAction = req.cookies.last_action;
  const currentTime = new Date().getTime();

  if (!lastAction || currentTime - new Date(lastAction).getTime() > 120000) {
    res.status(401).json({ message: 'Timeout or unauthorized access' });
  } else {
    // Proceed with viewing student details here
    res.json({ message: 'Viewing student details' });
  }
});

module.exports = router;
