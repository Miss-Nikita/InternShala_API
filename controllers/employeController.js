const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");
const Employe = require("../models/employeModel");
const ErrorHandler = require("../utils/ErrorHandling");
const { sendmail } = require("../utils/nodemailer");
const { sendtoken } = require("../utils/SendToken");
const imagekit = require("../utils/imageKit").initImageKit();
const path = require("path");

exports.homepage = catchAsyncErrors(async (req, res, next) => {
  res.json({ message: "Secure Employe Homepage!" });
});

exports.currentUser = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();
  res.json({ student });
});

// exports.employesignup = catchAsyncErrors(async (req, res, next) => {
//   const employe = await new Employe(req.body).save();
//   sendtoken(student, 201, res);
//   // res.json(student)
// });

// exports.studentsignin = catchAsyncErrors(async (req, res, next) => {
//   const student = await Student.findOne({ email: req.body.email })
//     .select("+password")
//     .exec();

//   if (!student)
//     return next(
//       new ErrorHandler("User not found with this email address", 404)
//     );
//   const isMatch = student.comparepassword(req.body.password);
//   if (!isMatch) return next(new ErrorHandler("Wrong Credientials", 500));

//   sendtoken(student, 200, res);
//   // res.json(student)
// });

// exports.studentsignout = catchAsyncErrors(async (req, res, next) => {
//   res.clearCookie("token");
//   res.json({ message: "Successfully signout!" });
// });

// exports.studentsendmail = catchAsyncErrors(async (req, res, next) => {
//   const student = await Student.findOne({ email: req.body.email }).exec();

//   if (!student)
//     return next(
//       new ErrorHandler("User not found with this email address", 404)
//     );

//   const url = `${req.protocol}://${req.get("host")}/student/forget-link/${
//     student._id
//   }`;

//   sendmail(req, res, next, url);
//   student.resetPasswordToken = "1";
//   await student.save();
//   res.json({ student, url });
// });

// exports.studentforgetlink = catchAsyncErrors(async (req, res, next) => {
//   const student = await Student.findById(req.params.id).exec();

//   if (!student)
//     return next(
//       new ErrorHandler("User not found with this email address ", 404)
//     );

//   if (student.resetPasswordToken == "1") {
//     student.resetPasswordToken = "0";
//     student.password = req.body.password;
//   } else {
//     return next(
//       new ErrorHandler("Invalid Reset Password Link! Please Try again", 404)
//     );
//   }
//   await student.save();

//   res.status(200).json({
//     message: "Password has been successsfully Changed ",
//   });
// });

// exports.studentresetpassword = catchAsyncErrors(async (req, res, next) => {
//   const student = await Student.findById(req.id).exec();

//   student.password = req.body.password;
//   await student.save();
//   sendtoken(student, 200, res);
// });

// exports.studentupdate = catchAsyncErrors(async (req, res, next) => {
//   await Student.findByIdAndUpdate(req.params.id, req.body).exec();

//   res.status(200).json({
//     success: true,
//     message: "Student Updated Successfully!",
//   });
// });

// exports.studentavatar = catchAsyncErrors(async (req, res, next) => {
//   const student = await Student.findById(req.params.id).exec();
//   const file = req.files.avatar;
//   const modifiedFileName = `resumebuilder-${Date.now()}${path.extname(
//     file.name
//   )}`;

//   if(student.avatar.fileId !== ""){
//     await imagekit.deleteFile(student.avatar.fileId)
//   }

//   const { fileId, url } = await imagekit.upload({
//     file: file.data,
//     fileName: modifiedFileName,
//   });

//   student.avatar = {fileId, url };
//   await student.save();
//   res.status(200).json({
//     success:true,
//     message:"Profile Updated Successfully"
//   })

//   // res.json({ file: req.files });
// });
