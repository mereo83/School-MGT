const express = require('express');
const cookieParser = require('cookie-parser'); // Import cookie-parser
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser()); // Use cookie-parser middleware

// Include route modules
const receptionistRoutes = require('./routes/receptionistRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const principalRoutes = require('./routes/principalRoutes');

// Use route modules
app.use('/receptionist', receptionistRoutes);
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);
app.use('/principal', principalRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
