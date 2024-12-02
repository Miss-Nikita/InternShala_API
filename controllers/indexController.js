const { catchAsyncErrors } = require("../middleware/catchAsyncErrors")
const Student = require("../models/studentModel")

exports.homepage = catchAsyncErrors(async (req,res,next) =>{
    res.json({message: "Homepage"})
})

exports.studentsignup = catchAsyncErrors(async(req,res,next) =>{
    const student = await new Student(req.body).save();
    res.status(201).json(student)
});


exports.studentsignin = catchAsyncErrors(async(req,res,next) =>{
     const student = await Student.findOne({email: req.body.email}).select("+password").exec();

     if (!student) return next(new ErrorHandler("User not found with is email Address ", 400)
    )

    const isMatch = student.comp
     res.json(student);
});



exports.studentsignout = catchAsyncErrors(async(req,res,next) =>{
    
});

