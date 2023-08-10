const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required:true
    },
    no_telp:{
        type: Number,
        required:true
    },
    photo:{
        type: Buffer,
        required:true
    }
});

module.exports= mongoose.model("Profile", profileSchema)