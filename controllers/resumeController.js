const { catchAsyncErrors } = require("../middleware/catchAsyncErrors");
const Student = require("../models/studentModel");



exports.resume = catchAsyncErrors(async(req,res,next)=>{
    const {resume} = await Student.findById(req.id).exec();
    res.json({message:"Secure Resume Page!",resume})
})