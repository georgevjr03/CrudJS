const express = require('express')
const router = express.Router()
const Person = require('../models/person')

router.get('/',async(req,res) =>{
    try{
        const persons = await Person.find()
        res.json(persons)
    }catch(err){
        res.status(400).json('Error:'+err)
    }
})

router.get('/:id',async(req,res) =>{
    try{
        const person = await Person.findById(req.params.id)
        res.json(person)
    }catch(err){
        res.status(400).json('Error:'+err)
    }
})

router.post('/',async(req,res) =>{
    const person = new Person({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        mobileNo: req.body.mobileNo
    })

    try{
        const a1 = await person.save()
        res.json('Name Added!')
    }catch(err){
        res.status(400).json('Error:'+err)
    }
})

router.put('/:id',async(req,res) =>{
    try{
        const person = await Person.findById(req.params.id)
        person.name = req.body.name
        person.age = req.body.age
        person.gender = req.body.gender
        person.mobileNo = req.body.mobileNo

        await person.save()
        res.json('person details updated!')

    }catch(err){
        res.status(400).json('Error:'+err)
    }
})

router.delete('/:id',(req,res)=>{
    Person.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Person deleted!'))
        .catch(err=>res.status(400).json('Error:'+err))
})

module.exports = router