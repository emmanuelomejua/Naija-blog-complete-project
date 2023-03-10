const mongoose = require('mongoose')

const { Schema, model } = mongoose

const postSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        name: String,
        type: Array
    }

}, {timestamps: true})

const Post = model('Post', postSchema)

module.exports = Post