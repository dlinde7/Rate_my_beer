var mySql = require('mysql');

var connection = mySql.createConnection({
    host: '{database.host}',
    port: '',
    user: '{database.user}',
    password: '{database.password}',
    database: '{database.name}'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = {
    connection
};
