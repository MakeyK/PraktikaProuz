const {Prodykt, Provider, Menu, Orders, Clients, Staff, Order_Menu, Produkt_Menu
} = require('../models/model')
const {Sequelize} = require('../db')
const {QueryTypes} = require('sequelize')
const sequelize = require('../db')

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
    // Обновление зарплаты у Продуктов
    async RedIdProdykt(req,res)
    {
        const {id_prodykt} = req.body
        const red = await Prodykt.update({name : req.body.name},{where:{id_prodykt}})
        return res.json(red)
    } 
}

module.exports = new DBController()