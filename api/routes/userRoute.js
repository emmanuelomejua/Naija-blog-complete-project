const { Router }  = require('express')

const router = Router()
const { deleteUser, updateUser, getUser } = require('../controllers/user')

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)

module.exports = router
