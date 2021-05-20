const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '35.204.174.136',
  user: 'User',
  password: 'ratebeer1234',
  database: 'ratemybeer',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
