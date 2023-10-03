const express = require('express')
const dotenv = require('dotenv').config()
// console.log(process.env.PORT)
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')


const app = express()
app.use(express.json())
app.use(cors())
// mongodb+srv://prashantrai:<password>@cluster0.qgbxw3i.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect('mongodb://localhost:27017'
// ).then(() => {
//     console.log("connected to mongourl")
// })

// port=3000

app.post('/register', async (req,res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({status : "ok"})
    } catch (error) {
        console.log(error)
        res.json({status : "error", error: 'Duplicate Email'})   
    }

    // const {name, email, password} = req.body
})
// app.get('/getuser', async (req,res) => {
//     try {
//         const user = await User.find();
//         if(user){

//             res.json({user});
//         }else{
//             res.json({status:'error'})
//         }
//     } catch (error) {
//         console.log(error)
//         res.json({status : "error", error: 'Duplicate Email'})   
//     }
// })


app.post('/login', async (req,res) => {
    const user = await User.find({
        email: req.body.email,
        password: req.body.password 
    })
    
    if(user){
        return res.json({status: 'ok', user: true})
    }
    else{
        return res.json({status: 'error', user: false})
        res.status(500).send(error);
    }
})


app.listen(process.env.PORT, () => {
    console.log(`Successfully Connected on Port :${process.env.PORT}`)
})