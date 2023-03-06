const bcrypt = require('bcrypt')
const User = require('../models/User')

// HASH PASSWORD
const encryptPassword = (password) => {
    const hashedPassword =  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    return hashedPassword ;
};

//register
const Register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const newUser = new User({
            username,
            email,
            password: encryptPassword(password)
        })

        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(err.message)
    }
}

//login
const Login = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user){
            return res.status(400).send({message: 'Wrong credentials'})
        }
        const validate = await bcrypt.compare(req.body.password, user.password)
        if(!validate){
            return res.status(400).send({message: 'Wrong credentials'})
        }
        const { password, ...others } = user._doc

        res.status(200).send({...others})
    } catch (err) {
        res.status(500).json(err.message)
    }
}


module.exports = { Register, Login }