const mysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  db: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: 'assignment',
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0,
  },
};

async function query(sql, params) {
  const pool = await mysql.createPool(config.db);
  const [results] = await pool.query(sql, params);
  return results;
}

module.exports = { query };
