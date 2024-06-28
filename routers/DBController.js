const {Prodykt, Provider, Menu, Orders, Clients, Staff, Order_Menu, Produkt_Menu
} = require('../models/model')
const {Sequelize} = require('../db')
const {QueryTypes} = require('sequelize')
const sequelize = require('../db')

class DBController
{
    // Создание таблицы
    async create(req,res)
    {
        const{id, title, description, isDone} = req.body
        const type = await ToDo.create({id, title, description, isDone})
        return res.json(type)
    }
    // Вывод всей таблицы
    // async getAll(req,res)
    // {
    //     const todo = await ToDo.findAll()
    //     return res.json(todo)
    // }
    // Вывод записей по определённому ID
    // async getID(req,res)
    // {
    //     const {id} = req.params
    //     let qwe = await ToDo.findAll({where:{id}})
    //     return res.json(qwe)
    // }
    
    // // Сортировка по дате (Сначала новые, потом старые записи)
    // async getDateNew(req,res)
    // {
    //     const {isDone} = req.query
    //     const newl = await ToDo.findAll({
    //         order:
    //         [
    //             ["createdAt", "DESC"]
    //         ]
    //     })
    //     return res.json(newl)
    // }
    // // Сортировка по дате (Сначала старые, потом новые записи)
    // async getDateOld(req,res)
    // {
    //     const {isDone} = req.query
    //     const old = await ToDo.findAll({
    //         order:
    //         [
    //             ["createdAt", "ASC"]
    //         ]
    //     })
    //     return res.json(old)
    // }
    // // Удаление по выбранному ID
    // async DelId(req,res)
    // {
    //     const {id} = req.params
    //     let delid = await ToDo.destroy({where:{id}})
    //     return res.json(delid)
    // }
    // // Удаление всех записей в таблице
    // async DelFull(req,res)
    // {
    //     let query_del_all=`DELETE FROM "todos"`
    //     const test_del_all = await sequelize.query(query_del_all)
    //     if(test_del_all) res.send({messenge: "Все записи удалены!"})
    //     else res.send({ERROR: "Не удалось удалить записи!"})
    // }
    // // Редактирование записей по выбранному ID
    // async RedId(req,res)
    // {
    //     const {id} = req.body
    //     const red = await ToDo.update({title : req.body.title},{where:{id}})
    //     return res.json(red)
    // }
}

module.exports = new DBController()