const express = require("express");
const router = express.Router();

const {
  resume,
  addeducation,
  editeducation,
  deleteeducation,
  addjob,
  editjob,
  deletejob,
  addintern,
} = require("../controllers/resumeController.js");
const { isAuthenticated } = require("../middleware/auth.js");

// GET /
router.get("/", isAuthenticated, resume);

// --------------------------Education-------------------

// POST   /add-edu
router.post("/add-edu", isAuthenticated, addeducation);

// POST   /edit-edu/:eduid
router.post("/edit-edu/:eduid", isAuthenticated, editeducation);

// POST   /delete-edu/:eduid
router.post("/delete-edu/:eduid", isAuthenticated, deleteeducation);

// --------------------------Job-------------------

// POST
router.post("/add-job", isAuthenticated, addjob);

// POST
router.post("/edit-job/:jobid", isAuthenticated, editjob);

// POST
router.post("/delete-job/:jobid", isAuthenticated, deletejob);

// ----------------------------Internships--------------------
// POST
router.post("/add-intern", isAuthenticated, addintern);

module.exports = router;
