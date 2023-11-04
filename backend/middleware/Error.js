// const ErrorHander = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "Internal Server Error";

  // Handle specific error cases
  
  // Wrong MongoDB ID error
  if (err.name === "CastError") {
    const message = `Resource not found - ${err.path}`;
    err = new ErrorHander(message, 400);
  }
  
  // Handle Mongoose duplicate key error
  if (err.code === 11000) {
    const message = "Duplicate Email";
    err = new ErrorHander(message, 400);
  }
  
  // Now, send the error response with the appropriate status code and message
  res.status(err.statuscode).json({
    success: false,
    message: err.stack
  });
};