const express = require("express")
const Stations = require("../models/policeStationsModel")

const router = express.Router()

// adding stations
router.post("/addstation",async (req,res)=>{
    const {stationName,stationAddress} = req.body;
    
    try{
        const stationAdded = await Stations.create({
            stationName:stationName,
            stationAddress:stationAddress
        });
        res.status(200).json(stationAdded);
    }
    catch(error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
    
});

// get all stations
// router.get("/allstations",async (req,res)=>{
//     try{
//         const showStations = await Stations.find();
//         res.status(200).json(showStations);
//     }
//     catch(error){
//         console.log(error)
//         res.status(400).json({error:error.message})
//     }
    
    
// })

// get specified station
router.get("/findstation",async (req,res)=>{
    const {stationName,stationAddress} = req.body;
    
    try{
        const askedStations = await Stations.findOne({stationName: stationName});
        if(askedStations){
            res.status(200).json(askedStations);
        }else{
            res.json({
                success: true,
                message: "No user found"
            })
        }
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            error:error.message
        })
    }
      
})

// delete station
router.delete("/delete",async (req,res)=>{
    const {stationName,stationAddress} = req.body;
    try{
        const askedStations = await Stations.findOneAndDelete({stationName: stationName});
        res.status(200).json("station deleted");
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

// update station
router.patch("/update/:name",async (req,res)=>{
    const stationName = req.params.name;
    // const {stationName, stationAddress} = req.body;
    
    try{
        const stationFound = await Stations.findOneAndUpdate({stationName: stationName},req.body,{
            new: true
        });
        if (stationFound){
            res.status(200).json({
                success: true,
                message: `updated details of ${stationName}`
            });
        }else{
            res.status(404).json({
                success: true,
                message: "No such station exists!"
            })
        }
        
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            error:error.message
        })
    }
      
})

module.exports = router;