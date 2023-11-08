const express = require('express')
const AuthRouter = express.Router()

AuthRouter.route('/')

.post((req,res,next)=>{
    const {email,password}=req.params.body
    res.send(`logging in ${email}`)
})