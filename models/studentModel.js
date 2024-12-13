const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const studentModel = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      require: [true, "Email is require"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      select: false,
      maxlength: [15, "Password should not exced more then 15 Characters"],
      minlength: [3, "Password should have atlest 6 Charectar"],
      // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/]
    },
  },
  { timestamps: true }
);

// studentModel.pre("save", function () {
//   if (!this.isModified("password")) {
//     return;
//   }

//   let salt = bcrypt.genSaltSync(10);
//   this.password = bcrypt.hashSync(this.password, salt);
// });

// studentModel.methods.comparepassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };

// studentModel.method.getjwttoken = function() {
//   return  jwt.sign({id: this._id },process.env.JWT_SECRET,{
//     exiresIn: process.env.JWT_EXPIRE,
//   })
// }

const Student = mongoose.model("student", studentModel);

module.exports = Student;
   