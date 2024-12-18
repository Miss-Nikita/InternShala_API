const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandling");

exports.homepage = catchAsyncErrors(async (req, res, next) => {
  console.log("Homepage function executed");
  res.json({ message: "homepage" });
});

exports.studentsignup = catchAsyncErrors(async (req, res, next) => {
  const student = await new Student(req.body).save();
  res.status(201).json(student);
});

exports.studentsignin = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findOne({ email: req.body.email })
    .select("+password ")
    .exec();

  if (!student)
    return next(
      new ErrorHandler("User not found with this email address", 404)
    );
  res.json(student);
});

exports.studentsignout = catchAsyncErrors(async (req, res, next) => {});
 