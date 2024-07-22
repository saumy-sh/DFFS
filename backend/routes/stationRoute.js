const express = require("express")
const Stations = require("../models/policeStationsModel")

const router = express.Router()

// adding stations
router.post("/",async (req,res)=>{
    const station = req.body.stationName;
    const account = req.body.stationAccount;
    console.log(station);
    try{
        const stationAdded = await Stations.create({
            stationName:station,
            stationAccount:account
        });
        res.status(200).json(stationAdded);
    }
    catch(error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
    
});

// get all stations
router.get("/",async (req,res)=>{
    try{
        const showStations = await Stations.find();
        res.status(200).json(showStations);
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
    
    
})

// get specified station
router.get("/:id",async (req,res)=>{
    
    
    try{
        const askedStations = await Stations.findById(req.params.id);
        res.status(200).json(askedStations);
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

// delete station
router.delete("/:id",async (req,res)=>{
    
    try{
        const askedStations = await Stations.findByIdAndDelete(req.params.id);
        res.status(200).json("station deleted");
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

// update station
router.patch("/:id",async (req,res)=>{
    const stationId = req.params.id;
    // const {station, address} = req.body;
    console.log(stationId)
    try{
        const updateStations = await Stations.findByIdAndUpdate(stationId,req.body,{
            new: true,
        });
        res.status(200).json("station updated");
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

module.exports = router;