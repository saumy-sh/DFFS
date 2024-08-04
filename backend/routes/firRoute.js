const express = require("express")
const Fir = require("../models/firDetails")

const router = express.Router()

// adding Fir
router.post("/",async (req,res)=>{
    const {stationName,stationAddress,userAddress,suspectName,suspectContact,suspectAddress,incidentType,incidentDetail,incidentLocation,firStatus} = req.body;
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
            incidentLocation:incidentLocation,
            firStatus: undefined
        });
        res.status(200).json({
            success: true,
            message: "FIR registered"
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            error: error.message,
            message: "FIR not registered!"
        });
    }
    
});

// get all Fir
router.get("/getall",async (req,res)=>{
    const {stationName, stationAddress} = req.body;

    try{
        const askedFir = await Fir.find({stationName: stationName});
        res.status(200).json(askedFir);
        // res.send(askedFir);
    }
    catch(error){
        console.log(error)
        res.status(404).json({error:error.message})
    }
    
    
})

// get specified Fir
router.get("/findfir/:id",async (req,res)=>{
    // console.log(FirId)
    try{
        const askedFir = await Fir.findById(req.params.id);
        res.status(200).json(askedFir);
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            error: error.message,
            message: "No such FIR id exists!"
        })
    }
      
})

// delete Fir
router.delete("/delete/:id",async (req,res)=>{
    
    try{
        const askedFir = await Fir.findByIdAndDelete(req.params.id);
        
        if (askedFir){
            res.status(200).json("Fir deleted");
        }else{
            res.status(404).json({
                success: true,
                message: "Id doesn't match any FIR"
            })
        }
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

// update Fir Status
router.patch("/updatestatus/:id",async (req,res)=>{
    const FirId = req.params.id;
    // const {Fir, address} = req.body;
    console.log(FirId)
    try{
        const updateFir = await Fir.findByIdAndUpdate(FirId,req.body,{
            new: true,
        });
        if (updateFir){
            res.status(200).json("Fir status updated");
        }else{
            res.status(404).json({
                success: true,
                message: "Id doesn't match any FIR"
            })
        }
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

module.exports = router;
