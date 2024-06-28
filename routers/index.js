const Router = require('express')
const router = new Router()
const DBRouter = require('./Routers')

router.use('/db', DBRouter)

module.exports=router