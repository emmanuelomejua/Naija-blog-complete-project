const { Router }  = require('express')

const { verifyUser } = require('../middlewares/auth')

const router = Router()
const { deleteUser, updateUser, getUser } = require('../controllers/user')

//update user
router.put('/:id', verifyUser, updateUser)

//delete user
router.delete('/:id', verifyUser, deleteUser)

//get user details
router.get('/:id', verifyUser, getUser)

module.exports = router
