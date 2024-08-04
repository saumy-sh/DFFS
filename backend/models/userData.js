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
        required: true,
        default: "citizen",
        enum: ["citizen","station","admin"]
    },
    userReportNo:{
        type: Number,
        default: 0
    }
});

const User = mongoose.model("userData",userSchema)
module.exports = User;