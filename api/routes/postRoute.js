const { Router }  = require('express')

const router = Router()
const  { createPost, updatePost, deletePost, getPost, getAllPost} = require('../controllers/post')

const { verifyUser } = require('../middlewares/auth')

router.post('/', verifyUser, createPost)

router.put('/:id', verifyUser, updatePost)

router.delete('/:id',verifyUser, deletePost)

router.get('/:id', getPost)

router.get('/',getAllPost)

module.exports = router
