const mysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  db: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: 'assignment',
  },
};

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.query(sql, params);
  return results;
}

module.exports = { query };
