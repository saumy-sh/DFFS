const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userAddress:{
        type: String,
        required: true,
        unique: true
    },
    userPassword:{
        type: String,
        unique: true,
        required: true
    },
    userStatus:{
        type: String,
        required: true
    }
});

const User = mongoose.model("userData",userSchema)
module.exports = User;