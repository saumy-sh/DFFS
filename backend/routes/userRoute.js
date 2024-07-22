const express = require("express")
const User = require("../models/userData")
const bcrypt = require("bcrypt");

const router = express.Router()

// adding User
router.post("/",async (req,res)=>{
    const address = req.body.userAddress;
    const password = req.body.userPassword;
    const status = req.body.userStatus
    console.log(address)
    // if (!User.findOne({address})){
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const userAdded = await User.create({
            userAddress:address,
            userPassword:hashedPassword,
            userStatus:status 
        });
        res.status(200).json(userAdded);
    }
    catch(error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
    // }
    // else{
    //     res.status(400).json("User already exist")
    // }
    
    
});

// get all User
// router.get("/",async (req,res)=>{
//     try{
//         const showUser = await User.find();
//         res.status(200).json(showUser);
//     }
//     catch(error){
//         console.log(error)
//         res.status(400).json({error:error.message})
//     }
    
    
// })

// get specified user
router.post("/:address",async (req,res)=>{
    const checkFor = req.params.address;
    const {address,password} = req.body;
    console.log(address);
    try{
        const askedUser = await User.findOne({userAddress:checkFor});
        console.log(askedUser);
        if (!askedUser){
            return res.status(400).json("Invalid address");

        }
        const passCorrect = await bcrypt.compare(password,askedUser.userPassword);
        if (!passCorrect){
            return res.status(400).json("Invalid password");
        }
        res.status(200).json("successfully logged in");
        
    }
    catch(error){
        console.log(error)
        res.status(404).json("No user found!")
    }
      
})

// delete user
router.delete("/:id",async (req,res)=>{
    
    try{
        const askedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user deleted");
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

// update user
router.patch("/:id",async (req,res)=>{
    const userId = req.params.id;
    // const {user, address} = req.body;
    console.log(userId)
    try{
        const updateUser = await User.findByIdAndUpdate(userId,req.body,{
            new: true,
        });
        res.status(200).json("user updated");
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
      
})

module.exports = router;
