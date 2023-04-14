const mongoose = require('mongoose')

const { Schema, model } = mongoose

const cateorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Category = model('Category', cateorySchema )

module.exports = Category
