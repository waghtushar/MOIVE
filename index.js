const express = require('express')
const multer = require('multer')
const fs = require('fs')
const db = require('./config/database')
const userModel = require('./models/userSchema')
const router = require('./Routers/router')


const app = express()
const port = 2001

app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads/'))
app.use(express.static('public'))
app.use('/',router)
app.set('view engine', 'ejs')



app.listen(port, (err) => {
    if (err) {
        console.log("Server Not Started")
        return false
    }
    console.log("Server Started At http://localhost:" + port)
}) 