const jwt = require("jsonwebtoken");
const { catchAsyncErrors } = require("./catchAsyncErrors");



exports.isAuthenticated = catchAsyncErrors(async (req,res,next) =>{
    const { token } = req.cookies;

    res.json(token)
})  