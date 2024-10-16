const express = require("express");
const router = express.Router()

const { homepage, studentsignup, studentsignin, studentsignout } = require("../controllers/indexController");

// Get /
router.get("/", homepage)


// Post  /Student/signup
router.post("/student/signup", studentsignup);

// Post  /Student/signin
router.post("/student/signin", studentsignin);


// POst  /Student/signout
router.post("/student/signout", studentsignout);





module.exports = router;