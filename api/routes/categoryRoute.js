const { Router }  = require('express')
const router = Router();
const { Categories, getCat } = require('../controllers/category')

router.post('/', Categories)
router.get('/', getCat)

module.exports = router
