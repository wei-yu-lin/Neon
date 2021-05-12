const pool = require('./mysql_db')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

const UserRegsiter = (req) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, connection) => {
      if (connectionError) {
        reject(connectionError) // 若連線有問題回傳錯誤
      } else {
        let regsiter_username = req.body['username']
        let regsiter_password = bcrypt.hashSync(req.body['password'], 10)
        let data = [regsiter_username, regsiter_password ]
        connection.query( // User撈取所有欄位的值組
          'INSERT INTO userdata (username,password) VALUES (?,?)', data, (error, result) => {
            if (error) {
              if (error.code === 'ER_DUP_ENTRY') {
                resolve('帳號已註冊')
              }
            } else {
              resolve('註冊成功')
            }
            connection.release()
          }
        )
      }
    })
  })
}

router.post('/regsiter', (req, res, next) => {
  UserRegsiter(req).then((value) => {
    res.send(value)
  })
})

module.exports = router
