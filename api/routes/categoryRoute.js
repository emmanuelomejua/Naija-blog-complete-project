const { Router }  = require('express')

const router = Router()
const Categries = require('../controllers/category')

router.post('/', Categries)
module.exports = router