const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");


exports.homepage = catchAsyncErrors(async (req, res, next) => {
    console.log("Homepage function executed");
    res.json({ message: "homepage" });
  });
  
  exports.studentsignup = catchAsyncErrors(async (req, res, next) => {
    console.log("Student signup function executed");
    res.json(req.body);
  });
  