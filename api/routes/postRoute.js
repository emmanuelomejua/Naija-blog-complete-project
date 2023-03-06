const { Router }  = require('express')

const router = Router()
const  { createPost, updatePost, deletePost, getPost, getAllPost} = require('../controllers/post')

router.post('/', createPost)
router.put('/:id',  updatePost)
router.delete('/:id', deletePost)
router.get('/id', getPost)
router.get('/',getAllPost)

module.exports = router