const pool = require('./mysql_db')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

const selectUserLogin = (insertValues) => {
  let db_result = {}
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, connection) => { // 資料庫連線
      if (connectionError) {
        reject(connectionError) // 若連線有問題回傳錯誤
      } else {
        connection.query( // User撈取所有欄位的值組
          'SELECT * FROM userdata WHERE user_id = ?',
          insertValues.body['user_id'], (error, result) => {
            if (error) {
              reject(error) // 寫入資料庫有問題時回傳錯誤
            } else if (Object.keys(result).length === 0) {
              resolve('信箱尚未註冊！')
            } else {
              db_password = result[0]['password'] // 資料庫加密後的密碼
              db_result.username = result[0]['username'] // 資料庫使用者名稱
              const userPassword = insertValues.body['password'] // 使用者登入輸入的密碼
              bcrypt.compare(userPassword, db_password).then((res) => { // 使用bcrypt做解密驗證
                if (res) {
                  db_result.message = '登入成功' // 資料庫使用者名稱
                  resolve(db_result) // 登入成功
                } else {
                  resolve('您輸入的密碼有誤！') // 登入失敗
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
