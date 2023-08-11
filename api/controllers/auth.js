require('dotenv').config()

const bcrypt = require('bcrypt')

const User = require('../models/User')

const jwt = require('jsonwebtoken')

// HASH PASSWORD
const encryptPassword = (password) => {

    const hashedPassword =  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

    return hashedPassword ;
};

//register
const Register = async (req, res) => {

    const userExists = await User.findOne({email: req.body.email})

    if(userExists){

        res.status(400).json('A user with this email already exists')

    } else {

        try {

            const newUser = new User({
                ...req.body,
                password: encryptPassword(password)
            })
    
            const user = await newUser.save()
            
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

}

//login
const Login = async (req, res) => {

    try {
        const user = await User.findOne({email: req.body.email})

        if(!user){
            return res.status(400).send({message: 'Incorrect username and password'})
        }

        const validate = await bcrypt.compare(req.body.password, user.password)

        if(!validate){
            return res.status(400).send({message: 'Incorrect username or password'})
        }

        const accessToken = jwt.sign({
            id: user._id,
        
        }, process.env.JWT_KEY, {expiresIn: '1d'})

        const { password, ...others } = user._doc

        res.status(200).json({...others,  accessToken})
    } catch (err) {
        res.status(500).json(err.message)
    }
}


module.exports = { Register, Login }
