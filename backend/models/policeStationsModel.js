const mongoose = require("mongoose");

const policeStationsSchema = new mongoose.Schema({
    stationName:{
        type: String,
        required: true,
        unique: true
    },
    stationAddress:{
        type: String,
        unique: true,
        required: true
    }
    
});

const Stations = mongoose.model("policeStations",policeStationsSchema)
module.exports = Stations;