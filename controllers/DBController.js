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
    // Добавление записей
    async createProvider(req,res)
    {
        const{FIO, number_phone} = req.body
        const type = await Provider.create({FIO, number_phone})
        return res.json(type)
    }
    async createMenu(req,res)
    {
        const{name, ingredients, category} = req.body
        const type = await Menu.create({name, ingredients, category})
        return res.json(type)
    }
    async createOrders(req,res)
    {
        const{order_list,general_amount, data_order} = req.body
        const type = await Orders.create({order_list,general_amount, data_order})
        return res.json(type)
    }
    // Вывод всех записей
    async getAllMenu(req,res)
    {
        const todo = await Menu.findAll()
        return res.json(todo)
    }
    async getAllOrders(req,res)
    {
        const todo = await Orders.findAll()
        return res.json(todo)
    }
    async getAllClients(req,res)
    {
        const todo = await Clients.findAll()
        return res.json(todo)
    }
    // Удаление записей в таблице Заказы по ID
    async DelIdOrder(req,res)
    {
        const {id_order} = req.params
        let delid = await Orders.destroy({where:{id_order}})
        return res.json(delid)
    }
    // Обновление зарплаты у Сотрудников
    async RedIdStaff(req,res)
    {
        const {id_staff} = req.body
        const red = await Staff.update({salary : req.body.salary},{where:{id_staff}})
        return res.json(red)
    }
    // Обновление имя у Продуктов
    async RedIdProdykt(req,res)
    {
        const {id_prodykt} = req.body
        const red = await Prodykt.update({name : req.body.name},{where:{id_prodykt}})
        return res.json(red)
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
                    let nameb = name_random[i_name]; let date_receipt = date_receipt_random[i_date]; let expiration_date=expiration_date_random[i_ex]; let id_provider=id_provider_random[i_id]
                    const row = Prodykt.create({nameb, date_receipt, expiration_date, id_provider})
                }
            console.log(row)
        } catch (error) {
           console.log(error)
        }
    }
}

module.exports = new DBController()