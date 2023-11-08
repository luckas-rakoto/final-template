const express = require('express')
const AuthRouter = express.Router()

AuthRouter.route('/')

.post((req,res,next)=>{
    const {email,password}=req.body
    res.send(`logging in ${email}`)
})

.get('/:userId',(req,res,next)=>{
    const {userId}=req.params
    res.send(`getting ${userId}`)
})