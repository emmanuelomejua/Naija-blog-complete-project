const bcrypt = require('bcrypt')
const User = require('../models/User')

// HASH PASSWORD
const encryptPassword = (password) => {
    const hashedPassword =  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    return hashedPassword ;
};

//register
const Register = async (req, res) => {
    const { email, password } = req.body
    const userExists = await User.findOne({email: req.body.email})
    if(userExists){
        res.status(400).json('A user with this email already exists')
    } else {
        try {
            const newUser = new User({
                email,
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
            return res.status(400).send({message: 'User does not exist'})
        }
        const validate = await bcrypt.compare(req.body.password, user.password)
        if(!validate){
            return res.status(400).send({message: 'Incorrect password'})
        }
        const { password, ...others } = user._doc

        res.status(200).json({...others})
    } catch (err) {
        res.status(500).json(err.message)
    }
}


module.exports = { Register, Login }