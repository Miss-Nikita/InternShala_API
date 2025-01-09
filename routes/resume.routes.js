const express = require("express");
const router = express.Router();

const {resume,addeducation} = require("../controllers/resumeController.js");
const { isAuthenticated } = require("../middleware/auth.js");


// GET /
router.get("/",isAuthenticated,resume)

// POST   /add-edu
router.post("/add-edu",isAuthenticated,addeducation)


module.exports = router;
