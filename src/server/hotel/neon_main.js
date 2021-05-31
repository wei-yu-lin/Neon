const pool = require('./mysql_db')
const express = require('express')
const router = express.Router()

const selectUserLogin = (insertValues) => {
  let db_result = {}
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, connection) => {
      if (connectionError) {
        reject(connectionError) // 若連線有問題回傳錯誤
      } else {
        connection.query(
          'SELECT * FROM neon_main ', (error, result) => {
            if (error) {
              reject(error)
            } else {}
            connection.release()
          }
        )
      }
    })
  })
}

router.get('/login', (req, res, next) => {
  selectUserLogin(req).then((value) => {
    res.json(value)
  })
})

module.exports = router
