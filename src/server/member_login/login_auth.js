const pool = require('./mysql_db')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

const selectUserLogin = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError) // 若連線有問題回傳錯誤
      } else {
        connection.query( // User撈取所有欄位的值組
          'SELECT * FROM userdata WHERE username = ?',
          insertValues.body['username'], (error, result) => {
            if (error) {
              console.error('SQL error: ', error)
              reject(error) // 寫入資料庫有問題時回傳錯誤
            } else if (Object.keys(result).length === 0) {
              resolve('信箱尚未註冊！')
            } else {
              const dbHashPassword = result[0]['password'] // 資料庫加密後的密碼
              const userPassword = insertValues.body['password'] // 使用者登入輸入的密碼
              bcrypt.compare(userPassword, dbHashPassword).then((res) => { // 使用bcrypt做解密驗證
                if (res) {
                  resolve('登入成功') // 登入成功
                } else {
                  resolve('您輸入的密碼有誤！') // 登入失敗
                  // console.log('nope')
                }
              })
            }
            connection.release()
          }
        )
      }
    })
  })
}

router.post('/login', (req, res, next) => {
  // selectUserLogin(req)
  selectUserLogin(req).then((value) => {
    res.json(value)
  })
})

module.exports = router
