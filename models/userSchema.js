const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    star: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
