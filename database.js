const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "123456",  
  host: "db",
  port: 5432,
  database: "desafio"
});

pool.on('connect', () => {
  console.log('Interação com a base de dados.');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};