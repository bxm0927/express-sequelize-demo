const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

const routers = require('./routers')
app.use(routers)

// 处理 404 响应
app.use((req, res, next) => {
  res.status(404).send('Sorry, 404!')
})

// 处理 500 响应
app.use((err, req, res, next) => {
  const { message } = err
  res.status(500).json({ message })
})

app.listen(3000, () => {
  console.log('Server started successfully!')
})
