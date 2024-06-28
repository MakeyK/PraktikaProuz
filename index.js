const express = require('express')
require('dotenv').config()
const router = require('./routers/index')
const models = require('./models/model')
const {QueryTypes} = require('sequelize')
const sequelize = require('./db')
const CryptoJS = require('crypto-js')

const PORT = 3000
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// app.use('/mak', router)


const start = async () =>
{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()