const Category = require('../models/Category')

const Categries = async (req, res) => {
    const newCat = new Category(req.body)
    try {
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const getCat = async (req, res) => {
    try {
        const cat = await Category.find().limit(6)
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).json(err.message)
    }
}

module.exports = { Categries, getCat }
