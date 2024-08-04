const mongoose = require("mongoose");

const firSchema = new mongoose.Schema({
    stationName:{
        type: String,
        required: true,
    },
    stationAddress:{
        type: String,
        required: true
    },
    stationAccount:{
        type: String,
        unique: true,
        required: true
    },
    complainantAddress:{
        type: String,
        required: true,
        unique: true
    },
    suspectName:{
        type: String,
        required: true,
    },
    suspectContact:{
        type: String,
    },
    suspectAddress:{
        type: String,
    },
    incidentType:{
        type: String,
        required: true
    },
    incidentDetail:{
        type: String,
        required: true,
    },
    incidentLocation:{
        type: String,
    },
    firStatus:{
        type: String,
        enum: ["registered,reported"],
        required: true
    }
    
},
{timestamps: true}
);

const Firs = mongoose.model("firDetails",firSchema)
module.exports = Firs;