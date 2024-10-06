const { catchAsyncErrors } = require("../middleware/catchAsyncErrors")

exports.homepage = (req,res,next) =>{
    res.json({message: "Homepage"})
}