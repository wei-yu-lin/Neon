const mysql = require('mysql');
const express = require('express');
const app = express();



const config = {
  host: 'localhost',  // 新建資料庫連線時的 主機名或ID地址 內容
  user: 'root',
  password: '0531', // root 密碼
  database: 'vue', // 資料庫名
  port: '3306'
}

const pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port,
  multipleStatements: true // 多語句查詢
})


module.exports = pool;
