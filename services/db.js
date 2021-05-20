var mySql = require('mysql');

var connection = mySql.createConnection({
    host: '35.204.174.136',
    port: '',
    user: 'User',
    password: 'ratebeer1234',
    database: 'ratemybeer'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = {
    connection
};