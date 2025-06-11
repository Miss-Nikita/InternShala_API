const express = require("express");
const {
  homepage,
  // currentUser,
  // employesignup,
  // employesignin,
  // employesignout,
  // employesendmail,
  // employeforgetlink,
  // employeresetpassword,
  // employeupdate,
  // employeavatar,
} = require("../controllers/employeController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

// GET/
router.get("/", homepage);

// // POST /employe
// router.post("/employe", isAuthenticated, currentUser);

// // POST   /employe/signup
// router.post("/employe/signup", employesignup);

// // POST   /employe/signin
// router.post("/employe/signin", employesignin);

// // GET   /employe/signout
// router.get("/employe/signout", isAuthenticated, employesignout);

// // POST   /employe/send-mail
// router.post("/employe/send-mail", employesendmail);

// // GET   /employe/forget-link/:employeid
// router.get("/employe/forget-link/:id", employeforgetlink);

// // POST   /employe/reset-password/:employeid
// router.post(
//   "/employe/reset-password/:id",
//   isAuthenticated,
//   employeresetpassword
// );

// // POST   /employe/update/:employeid
// router.post("/employe/update/:id", isAuthenticated, employeupdate);


// // POST   /employe/avatar/:employeid
// router.post("/employe/avatar/:id", isAuthenticated, employeavatar);

module.exports = router;
