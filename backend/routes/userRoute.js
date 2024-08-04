const express = require("express")
const User = require("../models/userData")
const bcrypt = require("bcrypt");

const router = express.Router()



// adding User
router.post("/signup",async (req,res)=>{
    const {userAddress,userPassword,userStatus} = req.body;
    
    
    // console.log("called")
    
    const existingUser = await User.findOne({userAddress: userAddress})
    
    if (!existingUser){
        try{
            const hashedPassword = await bcrypt.hash(userPassword,10);
            const userAdded = await User.create({
                userAddress:userAddress,
                userPassword:hashedPassword,
                userStatus:userStatus
            });
            return res.status(200).json(userAdded);
        }
        catch(error){
            console.log(error);
            return res.status(400).json({error: error.message});
        }
    }else{
        console.log("User already exists");
        return res.json({
            success: true,
            message: "User already exists"
        });
        
    }
    
    
    
});



// login user
router.get("/login", async (req,res)=>{
    const {userAddress,userPassword} = req.body;
    console.log(userAddress);
    try{
        const askedUser = await User.findOne({userAddress:userAddress});
        if (askedUser){
            const passCorrect = await bcrypt.compare(userPassword,askedUser.userPassword);
            if (!passCorrect){
                return res.status(400).json("Invalid password or address");
    
            }
        }

        
        
        res.status(200).json({
            message: "successfully logged in",
            userStatus: askedUser.userStatus
        });
        
    }
    catch(error){
        console.log(error)
        res.status(404).json("No user found!")
    }
      
})



// delete user
router.delete("/delete/:id",async (req,res)=>{
    
    try{
        const askedUser = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("user deleted");
    }
    catch(error){
        console.log(error)
        return res.status(400).json({error:error.message})
    }
      
})

// update user
router.patch("/update/:id",async (req,res)=>{
    const userId = req.params.id;
    // const {user, address} = req.body;
    console.log(userId)
    try{
        const updateUser = await User.findByIdAndUpdate(userId,req.body,{
            new: true,
        });
        return res.status(200).json("user updated");
    }
    catch(error){
        console.log(error)
        return res.status(400).json({error:error.message})
    }
      
})

module.exports = router;
