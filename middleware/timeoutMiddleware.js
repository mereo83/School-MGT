const COOKIE_NAME = 'last_action';

// Middleware to set/update the last action timestamp in a cookie
function timeoutMiddleware(req, res, next) {
  const now = new Date().toISOString();
  res.cookie(COOKIE_NAME, now, { maxAge: 120000 }); // Set cookie to expire after 2 minutes (120000 milliseconds)
  next();
}

module.exports = timeoutMiddleware;
