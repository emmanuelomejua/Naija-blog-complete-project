const { Router }  = require('express')
const router = Router();
const {Categries, getCat} = require('../controllers/category')

router.post('/', Categries)
router.get('/', getCat)

module.exports = router
