const mongoose = require('mongoose')

const { Schema, model } = mongoose

const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    categories: {
        name: String,
        type: String
    }

}, {timestamps: true})

const Post = model('Post', postSchema)

module.exports = Post
