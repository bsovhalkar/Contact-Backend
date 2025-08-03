const mongoose = require("mongoose");


const schema = mongoose.schema({
    name:{
        type:String,
        required:[true,"Please add the contact name"]
    },
    phone:{
        type:String,
        required:[true,"Please add the contact phone number"]
    },
    email:{
        type:String,
        required:[true,"Please add the contact email address"]
    },
    
})