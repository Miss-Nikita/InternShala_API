require('dotenv').config({path:"./.env"})
const express = require("express")
const app = express()


// db connection
require("./models/database").connectdatabase();

// logger
const logger = require("morgan");
app.use(logger("tiny"))

app.use("/",require("./routes/index.routes"))

// error handling
const ErrorHandler = require('./utils/ErrorHandling');
const { genetatedErrors } = require('./middleware/errors');
app.all("*", (req,res,next) =>{
    next(new ErrorHandler(`Requested URL not Found ${req.url}`,404))
})
app.use(genetatedErrors)


app.listen(
    process.env.PORT,
    (console.log(`server running on port ${process.env.PORT}`))
);

// mvc pattern 
// Models     
// views
// controllers