require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();


//  db connection
require("./models/database").connectdatabase();


// logger
const logger = require("morgan");
app.use(logger("tiny"));


// bodyparsar
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// session and cookie
const session = require("express-session")
const cookieparser = require("cookie-parser")
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.EXPRESS_SESSION_SECRET
}))

// app.use(cookieparser());


// router
app.use("/", require("./routes/index.routes"));



// error handling
const ErrorHandler = require("./utils/ErrorHandling");
const { genetatedErrors } = require("./middleware/errors");
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Requested URL not Found ${req.url}`, 404));
});
app.use(genetatedErrors);

app.listen(
  process.env.PORT,
  console.log(`server running on port ${process.env.PORT}`)
);


// mvc pattern
// Models
// views
// controllers
