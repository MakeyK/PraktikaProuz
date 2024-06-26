const { type } = require('os')
const sequelize = require('../db')
const {DataTypes, DATE, MEDIUMINT} = require('sequelize')

const Prodykt = sequelize.define('prodykt',{
    id_prodykt: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING},
    date_receipt: {type: DataTypes.DATE},
    expiration_date: {type: DataTypes.DATE},
    id_provider: {type: DataTypes.INTEGER, unique: true}
})

const Provider = sequelize.define('provider', {
    id_provider: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING},
    number_phone: {type: DataTypes.TEXT, unique: true} 
})

const Menu = sequelize.define('menu_blud', {
    id_bluda: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING},
    ingredients: {type: DataTypes.TEXT},
    category: {type: DataTypes.TEXT},
    id_order: {type: DataTypes.INTEGER, unique: true}
})

const Orders = sequelize.define('orders', {
    id_order: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    order_list: {type: DataTypes.TEXT},
    general_amount: {type: DataTypes.INTEGER},
    id_client: {type: DataTypes.INTEGER, unique: true},
    data_order: {type: DataTypes.DATE}
})

const Clients = sequelize.define('clients', {
    id_client: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    FIO: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
    number_phone: {type: DataTypes.TEXT, unique: true}
})

const Staff = sequelize.define('staff', {
    id_staff: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING},
    post: {type: DataTypes.TEXT},
    salary: {type: DataTypes.TEXT},
    experience: {type: DataTypes.INTEGER},
    number_phone: {type: DataTypes.TEXT, unique: true}
})

const Produkt_Menu = sequelize.define('produkt_menu', {
    id_produkt: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_bluda: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Order_Menu = sequelize.define('order_menu', {
    id_order: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_bluda: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

Prodykt.hasMany(Menu, Provider)
Provider.belongsTo(Prodykt)
Menu.belongsTo(Prodykt)
Orders.belongsTo(Menu)
Menu.hasMany(Orders, Staff)
Staff.belongsTo(Menu)
Orders.hasMany(Clients)
Clients.belongsTo(Orders)
Prodykt.belongsTo(Produkt_Menu)
Menu.belongsTo(Produkt_Menu)
Produkt_Menu.hasMany(Menu, Prodykt)
Orders.belongsTo(Order_Menu)
Menu.belongsTo(Order_Menu)
Order_Menu.hasMany(Menu, Orders)


module.exports = {
    Prodykt, Provider, Menu, Orders, Clients, Staff, Order_Menu, Produkt_Menu
}