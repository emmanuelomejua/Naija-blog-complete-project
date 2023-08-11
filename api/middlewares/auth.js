const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {

    const authHeader = req.headers.token

    if(authHeader){
        const token = authHeader.split(' ')[1]

        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if(!err){
                return req.user = user

            } else {
                return res.status(401).json('Token is not valid')
            }
        })
        next()
    } else {
        return res.status(403).json('Requires authentication')
    }
}

module.exports = { verifyUser }
