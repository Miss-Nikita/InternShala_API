const mongoose = require("mongoose")

exports.connectdatabase = async () =>{
    try {
        
        await mongoose.connect(process.env.MONGOURL)
        console.log("Database is connected ");
        
    } catch (error) {
        console.log(error.message);
        
    }
}




