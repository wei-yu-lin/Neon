const express = require('express')
const loginApi = require('./member_login/login_auth')
const RegsiterApi = require('./member_login/Regsiter_auth')

const bodyParser = require('body-parser') // post 資料是需要
const app = express()
app.use(bodyParser.json())
// 後端api路由
app.use('/auth', loginApi)
app.use('/auth', RegsiterApi)
// 監聽埠
app.listen(3000)
console.log('success listen at port:3000......')
