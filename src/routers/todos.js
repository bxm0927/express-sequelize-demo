const express = require('express')
const router = express.Router()
const TodoModel = require('../../models').Todo

/**
 * 待办事项列表
 */
router.get('/list', async (req, res, next) => {
  try {
    const { pageSize = 10, pageIndex = 1, status } = req.query
    const limit = Number(pageSize)
    const offset = Number((pageIndex - 1) * pageSize)

    let where = {}
    if (status) {
      where = { status }
    }

    const result = await TodoModel.findAndCountAll({
      where,
      limit,
      offset,
    })

    res.json({
      code: 0,
      data: result,
      msg: '',
    })
  } catch (error) {
    next(error)
  }
})

/**
 * 事项列表详情
 */
router.get('/detail/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await TodoModel.findOne({
    where: {
      id,
    },
  })

  res.json({
    code: 0,
    data: result,
    msg: '',
  })
})

/**
 * 创建一个待办事项
 */
router.post('/create', async (req, res, next) => {
  const { name, content, deadline } = req.body
  const result = await TodoModel.create({
    name,
    content,
    deadline,
  })

  res.json({
    code: 0,
    data: result,
    msg: '',
  })
})

/**
 * 更新一个待办事项
 */
router.post('/update', async (req, res, next) => {
  const { id, name, content, deadline } = req.body
  const todoItem = await TodoModel.findOne({
    where: {
      id,
    },
  })

  if (!todoItem) {
    res.json({
      code: -1,
      data: null,
      msg: '无此待办事项',
    })
    return
  }

  const result = await todoItem.update({
    name,
    content,
    deadline,
  })

  res.json({
    code: 0,
    data: result,
    msg: '更新成功',
  })
})

/**
 * 创建一个待办事项的状态
 */
router.post('/updateStatus/:id/:status', async (req, res, next) => {
  const { id, status } = req.params
  const todoItem = await TodoModel.findOne({
    where: {
      id,
    },
  })

  if (!todoItem) {
    res.json({
      code: -1,
      data: null,
      msg: '无此待办事项',
    })
    return
  }

  const result = await todoItem.update({
    status,
  })

  res.json({
    code: 0,
    data: result,
    msg: '更新成功',
  })
})

module.exports = router
