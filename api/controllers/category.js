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

module.exports = Categries 