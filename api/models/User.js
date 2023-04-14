const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        requied: true,
        unique: true
    },
    password: {
        type: String,
        requied: true,
        min: 4
    },
    profilePic: {
        type: String,
        default: ''
    }
}, {timestamps: true})

const User = model('User', userSchema)

module.exports = User