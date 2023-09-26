const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const {mongoose} = require("mongoose");
const cookieParser = require('cookie-parser')

const app = express ();

// database connection 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connected"))
.catch((err) => console.log("Database not connected", err));


// middleware for backend
app.use(express.json())
app.use(cookieParser());

app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoute'))

// app.get("*", (req,resp)=>{
//     resp.send("OPPS NOT A VALID PAGE GO BACK !!")
// })

const port = 8000;  
app.listen(port, () => console.log(` Server start on port ${port}!`))