const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('dragelement'))
app.post('/',(req,res)=>{
    const {name,newpar}=req.body
    console.log({name,newpar})
    return res.redirect('/puchet')
})
app.get('/puchdaet',(req,res)=>{
    res.redirect('/puchet')
})
app.get('/puchet',(req,res)=>{
    res.json({"mn":"a"})
})
app.listen(4000)