const { type } = require('os')
const sequelize = require('../db')
const {DataTypes, DATE, MEDIUMINT} = require('sequelize')

const Prodykt = sequelize.define('prodykt',{
    id_prodykt: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING},
    date_receipt: {type: DataTypes.DATE},
    expiration_date: {type: DataTypes.DATE},
    proizvoditel: {type: DataTypes.STRING}
})

const Provider = sequelize.define('provider', {
    id_provider: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING},
    number_phone: {type: DataTypes.TEXT, unique: true}
})

const Menu = sequelize.define('menu', {
    id_bluda: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING},
    ingredients: {type: DataTypes.TEXT},
    category: {type: DataTypes.TEXT},
})

const Orders = sequelize.define('orders', {
    id_order: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    order_list: {type: DataTypes.TEXT},
    general_amount: {type: DataTypes.INTEGER},
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

const Produkt_Menu = sequelize.define('produkt_menu', {})

const Order_Menu = sequelize.define('order_menu', {})

Prodykt.belongsTo(Produkt_Menu)
Prodykt.hasMany(Provider)
Provider.belongsTo(Prodykt)
Produkt_Menu.hasMany(Prodykt)
Produkt_Menu.hasMany(Menu)
Menu.belongsTo(Produkt_Menu)
Menu.belongsTo(Order_Menu)
Menu.hasMany(Staff)
Order_Menu.hasMany(Menu)
Order_Menu.hasMany(Orders)
Orders.belongsTo(Order_Menu)
Orders.hasMany(Clients)
Clients.belongsTo(Orders)

module.exports = {
    Prodykt, Provider, Menu, Orders, Clients, Staff, Order_Menu, Produkt_Menu
}