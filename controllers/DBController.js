const {Prodykt, Provider, Menu, Orders, Clients, Staff, Order_Menu, Produkt_Menu
} = require('../models/model')
const {Sequelize} = require('../db')
const {QueryTypes} = require('sequelize')
const sequelize = require('../db')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
  }

class DBController
{
    // Создание записей в продукты
    async createProduct(req,res, next)
    {
        try {
            const {name, date_receipt, expiration_date, id_provider} = req.body
            const row = Prodykt.create({name, date_receipt, expiration_date, id_provider})
            console.log(row)
        } catch (error) {
           console.log(error)
        }
    }

    async radnomCreateProduct(req,res, next)
    {
        try {
            let name_random = ['Кукуруза','Сыр','Масло','Картошка', 'Молоко', 'Помидоры']
            let date_receipt_random = ['1999-01-08', '2002-03-04', '2006-03-01']
            let expiration_date_random = ['1999-01-08', '2002-03-04', '2006-03-01']
            let id_provider_random = [1,2,3,4,5,6]
            for(let i = 0; i <= 30; i++)
                {
                    let i_name = getRandomInt(0, 5)
                    let i_date = getRandomInt(0,2)
                    let i_ex = getRandomInt(0,2)
                    let i_id = getRandomInt(0,5)
                    let name = name_random[i_name]; let date_receipt = date_receipt_random[i_date]; let expiration_date=expiration_date_random[i_ex]; let id_provider=id_provider_random[i_id]
                    
                }
            const row = Prodykt.create({name, date_receipt, expiration_date, id_provider})
            console.log(row)
        } catch (error) {
           console.log(error)
        }
    }

    //Создание записей в Клиенты

}

module.exports = new DBController()