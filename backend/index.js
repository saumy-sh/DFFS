const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const app = express();
const dotenv = require("dotenv");



// Middleware
// const userAuth = require("./middleware/userAuth")

dotenv.config();

URI = process.env.URI
PORT = process.env.PORT
app.use(express.json());
// app.use(cors);
const stationRoute = require("./routes/stationRoute")
const userRoute = require("./routes/userRoute")
const firRoute = require("./routes/firRoute")


// app.get("/",(req,res)=>{
//     return res.json({
//         success: true,
//         message: "running"
//     })
// }) 

mongoose
    .connect(URI)
    .then(()=>{
        console.log("connected successfully");
        app.listen(PORT || 8000, (err)=>{
            if (err) console.log(err);
            console.log(`running on port ${PORT}`)
        });

    })
    .catch((error)=>{
        console.log(error)
    });

app.use("/station",stationRoute);
app.use("/user",userRoute);
app.use("/fir",firRoute);
