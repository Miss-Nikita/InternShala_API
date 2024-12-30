const express = require("express");
const {
  currentUser,
  homepage,
  studentsignup,
  studentsignin,
  studentsignout,
  studentsendmail,
  studentforgetlink,
} = require("../controllers/indexController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

// GET/
router.get("/", homepage);

// POST /student
router.post("/student", isAuthenticated, currentUser);

// POST   /student/signup
router.post("/student/signup", studentsignup);

// POST   /student/signin
router.post("/student/signin", studentsignin);

// GET   /student/signout
router.get("/student/signout", isAuthenticated, studentsignout);

// POST   /student/send-mail
router.post("/student/send-mail", studentsendmail);

// GET   /student/forget-link
router.get("/student/forget-link/:id", studentforgetlink);

module.exports = router;
