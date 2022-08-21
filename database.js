const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://postgres:weesu250m@localhost:5432/baseDW"
});

pool.on('connect', () => {
  console.log('Interação com a base de dados.');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};