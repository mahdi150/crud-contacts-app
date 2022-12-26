const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    firstName : {
        type : String ,
        required : true
    },
    lastName : {
        type : String ,
        required : true
    },
    NumTel : {
        type : String,
        required :true
    }
})
module.exports = mongoose.model("contact",contactSchema)