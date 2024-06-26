const ApiError = require('../ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, UserStorage} = require('../models/model')
const sequelize = require('../database');
const fs = require('fs')

const generateJwt = (id_client, FIO, login, number_phone) => 
{
  return jwt.sign
  (
    {id_client, FIO, login, number_phone},
    process.env.SECRET_KEY,
    {expiresIn: '72h'}
  )
}

class AuthController 
{
  async registration(req, res, next)
  {
    try {
      const {FIO, login, number_phone} = req.body
      let candidate = await User.findOne({where: {login}})
      if (candidate)  
      {
        return next(ApiError.badRequest('Пользователь с таким login уже существует'))
      }
      const user = await User.create({FIO, login, number_phone})
      const token = generateJwt(user.id_user, user.nickname, user.email, user.role)
      return res.json({token})
    } catch (error) {
        console.log(error)
        return next(ApiError.badRequest("Сервер чуть не сгорел"))
    }
    
  }

  async login(req, res, next)
  {
    try {
      const {email, password} = req.body
      if (!email)
      {
        return next(ApiError.badRequest('Некорректный email'))
      }
      if (!password)
      {
        return next(ApiError.badRequest('Некорректный пароль'))
      }
      const user = await User.findOne({where: {email}})
      if (!user)
      {
        return next(ApiError.internal('Пользователь не найден'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password)
      if (!comparePassword)
      {
        return next(ApiError.internal('Указан неверный пароль'))
      }
      const token = generateJwt(user.id_user, user.nickname, user.email, user.role)
      res.cookie('token', token, {
        httpOnly: true
      })
      return res.json({token})
    } catch (error) {
        console.log(error)
        return next(ApiError.badRequest("Сервер чуть не сгорел"))
    }
  }
}


module.exports = new AuthController()   