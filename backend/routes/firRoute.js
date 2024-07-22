const express = require("express")
const Fir = require("../models/firDetails")

const router = express.Router()

// adding Fir
router.post("/",async (req,res)=>{
    const {stationName,stationAddress,userAddress,suspectName,suspectContact,suspectAddress,incidentType,incidentDetail,incidentLocation} = req.body;
    console.log(stationName)
    try{
        const FirAdded = await Fir.create({
            stationName:stationName,
            stationAddress:stationAddress,
            complainantAddress:userAddress,
            suspectName:suspectName,
            suspectContact:suspectContact,
            suspectAddress:suspectAddress,
            incidentType:incidentType,
            incidentDetail:incidentDetail,
            incidentLocation:incidentLocation
        });
        res.status(200).json(FirAdded);
    }
    catch(error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
    
});

// get all Fir
router.get("/",async (req,res)=>{
    try{
        const showFir = await Fir.find();
        res.status(200).json(showFir);
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
    
    
})

// get specified Fir
router.get("/:id",async (req,res)=>{
    // console.log(FirId)
    try{
        const askedFir = await Fir.findById(req.params.id);
        res.status(200).json(askedFir);
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

// delete Fir
router.delete("/:id",async (req,res)=>{
    
    try{
        const askedFir = await Fir.findByIdAndDelete(req.params.id);
        res.status(200).json("Fir deleted");
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

// update Fir
router.patch("/:id",async (req,res)=>{
    const FirId = req.params.id;
    // const {Fir, address} = req.body;
    console.log(FirId)
    try{
        const updateFir = await Fir.findByIdAndUpdate(FirId,req.body,{
            new: true,
        });
        res.status(200).json("Fir updated");
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

module.exports = router;
