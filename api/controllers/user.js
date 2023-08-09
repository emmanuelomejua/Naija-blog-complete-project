const bcrypt = require('bcrypt')
const User = require('../models/User')
const Post = require('../models/Post')

const cloudinary = require('../middlewares/upload')

//update
const updateUser = async (req, res) => {

    try {
        
        if(req.body.userId === req.params.id){

            if(req.body.password){
                const salt = await bcrypt.genSalt(10)

                req.body.password = await bcrypt.hash(req.body.password, salt)
            }
            try {
                const profilePic = req.body.profilePic

                const photoUrl = await cloudinary.uploader.upload(profilePic, {
                    upload_preset: 'blogsite'
                })

                const updated = await User.findByIdAndUpdate(req.params.id, 
                    {
                       ...req.body,
                       profilePic: photoUrl.url
                    }, {new: true})

                res.status(200).json(updated)

            } catch (err) {
                res.status(500).json(err.message)
            }
        } else {
            res.status(403).send({ message: 'You are not allowed to perform this action'})
        }
    } catch (error) {
         res.status(500).json(err.message)
    }
}

//delete
const deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id)

            try {
                await Post.deleteMany({email: user.email})
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
        let user = await User.findById(req.params.id)

        const { password, ...otherDetails } = user._doc

        res.status(200).json(otherDetails)
    } catch (err) {

        res.status(500).json(err.message)
    }
}

module.exports = {updateUser, deleteUser, getUser }
