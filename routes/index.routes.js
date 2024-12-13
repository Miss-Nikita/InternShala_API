const express = require("express");
const { homepage, studentsignup, studentsignin } = require("../controllers/indexController");
const router = express.Router();



// GET/
router.get("/",homepage)

// POST   /student/signup
router.post("/student/signup",studentsignup)

// POST   /student/signin
router.post("/student/signin",studentsignin)

module.exports = router;
