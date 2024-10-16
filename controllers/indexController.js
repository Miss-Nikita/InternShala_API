const { catchAsyncErrors } = require("../middleware/catchAsyncErrors")
const Student = require("../models/studentModel")

exports.homepage = (req,res,next) =>{
    res.json({message: "Homepage"})
}

exports.studentsignup = catchAsyncErrors(async(req,res,next) =>{
    const student = await new Student(req.body).save();
    res.status(201).json(student)
});


exports.studentsignin = catchAsyncErrors(async(req,res,next) =>{
     
});


exports.studentsignout = catchAsyncErrors(async(req,res,next) =>{
    
});

