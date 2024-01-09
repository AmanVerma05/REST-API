const express = require('express')
const router = express.Router()
const empSchema = require('../models/emp')

// ------------- All Get ------------- //
router.get('/allEmp',async(req,res) => {
   try{
    const allEmp = await empSchema.find()
    res.json(allEmp)
   }
   catch(error){
    res.send('Error' + error)
   }
})

// ------------- Get by Id ------------- //
router.get('/:id',async(req,res) => {
    try{
     const emp = await empSchema.findById(req.params.id)
     res.json(emp)
    }
    catch(error){
     res.send('Error' + error)
    }
 })

// ------------- POST Data ------------- //
router.post('/postData',async(req,res) => {
    // const {name, tech, sub} = req.body
    const data = new empSchema({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub,
    })

    try {
        const a1 = await data.save()
        res.json(a1)
    } catch (error) {
        res.send(error)
    }
 })

// ------------- Update data ------------- //
router.patch('/:id',async(req,res)=>{
    try {
        const data = await empSchema.findById(req.params.id)
        data.sub = req.body.sub
        const a1 = await data.save() 
        res.json(a1)
    } catch (error) {
        res.send(error)
    }
})

// ------------- Delete by Id ------------- //
router.delete('/:id', async (req, res) => {
    try {
        const data = await empSchema.deleteOne({ _id: req.params.id })
        res.json(data)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router