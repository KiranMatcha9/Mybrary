const express = require('express')
const router = express.Router()
console.log("this is in the master");

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/about',(req,res)=>{
    res.render('About')
})

console.log("test the pull");

module.exports = router