const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    }

})

const person = mongoose.model('person',personSchema)

module.exports = person