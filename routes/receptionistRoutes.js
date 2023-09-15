const express = require('express');
const router = express.Router();

// Route to register a new student (for the receptionist role)
router.post('/register', (req, res) => {
  // Check the cookie to enforce the 2-minute timeout here
  const lastAction = req.cookies.last_action;
  const currentTime = new Date().getTime();

  if (!lastAction || currentTime - new Date(lastAction).getTime() > 120000) {
    res.status(401).json({ message: 'Timeout or unauthorized access' });
  } else {
    // Proceed with registering a new student here
    res.json({ message: 'Registering a new student (receptionist)' });
  }
});

module.exports = router;
