const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        requied: true,
        unique: true,
        min: 4,
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
