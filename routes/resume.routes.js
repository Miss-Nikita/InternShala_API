const express = require("express");
const router = express.Router();

const {resume} = require("../controllers/resumeController.js");
const { isAuthenticated } = require("../middleware/auth.js");


router.get("/",isAuthenticated,resume)




module.exports = router;
