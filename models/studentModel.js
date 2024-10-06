const mongoose = require("mongoose")

const studentModel = new mongoose.Schema(
    {
        email:{
         type : String,
         unique: true,
         require: [true, "Email is require"],
         match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],

        },
        password:{
            type: String,
            select : false,
            maxlength: [15, "Password should not exced more then 15 Characters"],
            minlength: [3,"Password should have atlest 6 Charectar"],
            // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/]

        }
    },
    {timestamps: true}
);

const Student = mongoose.model("student",studentModel)

module.exports = Student