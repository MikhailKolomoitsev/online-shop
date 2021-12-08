const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRole')

router.post('/', checkRole, deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getById)

module.exports = router