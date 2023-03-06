const bcrypt = require('bcrypt')
const User = require('../models/User')
const Post = require('../models/Post')

//update
const updateUser = async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updated = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updated)
        } catch (err) {
            res.status(500).json(err.message)
        }
    } else {
        res.status(401).send({msg: 'You are not allowed to perform this action'})
    }
}

//delete
const deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id)
            // const post = await Post.findOne(username)

            try {
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)

                res.status(200).send({msg: 'user has been deleted'})
            } catch (err) {
                res.status(500).json(err.message)
            }
        } catch (error) {
            res.status(404).send({msg: 'User does not exist'})
        }
    } else {
        res.status(401).send({msg: 'User not found'})
    }
}

//get user
const getUser = async (req, res) => {
    try {
        let user1 = await User.findById(req.params.id)
        const { password, ...otherDetails } = user1._doc
        res.status(200).json(otherDetails)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports = {updateUser, deleteUser, getUser }