const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require('dotenv').config()

const app = express()
const port = process.env.port || 9000


app.use(cors())
app.use(express.json())

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true})


const connection=mongoose.connection;
connection.on('open',()=>{
    console.log("MongoDB databse established successfully");
})

const personRouter = require('./routes/persons')
app.use('/persons',personRouter)


app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`)
})
