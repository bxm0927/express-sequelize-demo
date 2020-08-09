const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

const routers = require('./routers')
app.use(routers)

app.listen(3000)
