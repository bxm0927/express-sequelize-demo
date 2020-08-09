const express = require('express')
const router = express.Router()
const UserModel = require('../../models').User

router.get('/list', async (req, res, next) => {
  const result = await UserModel.findAll()

  res.json({
    code: 0,
    data: result,
    msg: 'success',
  })
})

router.get('/detail/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await UserModel.findOne({
    where: {
      id,
    },
  })

  res.json({
    code: 0,
    data: result ? result.dataValues : null,
    msg: 'success',
  })
})

router.get('/create', async (req, res, next) => {
  const { firstName, lastName, email } = req.query
  const result = await UserModel.create({
    firstName,
    lastName,
    email,
  })

  res.json({
    code: 0,
    data: result.dataValues,
    msg: 'success',
  })
})

module.exports = router
