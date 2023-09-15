// middleware/registerStudentMiddleware.js

const studentsArray = require('../data/studentArray'); // Import the studentsArray

function registerStudent(req, res, next) {
  const savedCookie = req.cookies;

  if (savedCookie.status) {
    res.send('A cookie exists, try again after 2 minutes');
  } else {
    const newStudent = {
      Id: studentsArray.length + 1, // Generate a unique student ID (you can use a better method for this)
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
    };

    studentsArray.push(newStudent); // Automatically add the student to studentsArray
    res.cookie('status', 'Done', { maxAge: 20000 });
    next(); // Continue to the next middleware or route handler
  }
}

module.exports = registerStudent;
