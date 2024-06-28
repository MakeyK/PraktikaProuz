const Router = require('express')
const DBController = require('../controllers/DBController')
const db = require('../db')
const router = new Router()

router.post('/createProvider', DBController.createProvider)
router.post('/createMenu', DBController.createMenu)

router.get('/allmenu', DBController.getAllMenu)
router.get('/allorders', DBController.getAllOrders)
router.get('/allclients', DBController.getAllClients)

router.delete('/deleteorder', DBController.DelIdOrder)

module.exports = router