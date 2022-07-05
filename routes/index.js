const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/home',(req,res)=>{
    res.send('Home')
})
router.get('/about',(req,res)=>{
    res.render('About')
})

module.exports = router