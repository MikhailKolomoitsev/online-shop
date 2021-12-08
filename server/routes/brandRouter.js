const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRole')

router.post('/', checkRole,  brandController.create)
router.get('/', brandController.getAll)

module.exports = router