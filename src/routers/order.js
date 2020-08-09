const express = require('express')
const router = express.Router()

router.get('/list', (req, res, next) => {
  res.json({
    url: req.url,
  })
})

module.exports = router
