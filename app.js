const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// Middleware to parse cookies
app.use(cookieParser());

// Import the route files for different roles
const studentRoutes = require('./routes/studentRoutes');
const principalRoutes = require('./routes/principalRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const receptionistRoutes = require('./routes/receptionistRoutes');

// Mount the routes for each role
app.use('/student', studentRoutes);
app.use('/principal', principalRoutes);
app.use('/teacher', teacherRoutes);
app.use('/receptionist', receptionistRoutes);

// Your other middleware and configurations

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
