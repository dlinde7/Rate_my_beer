var mySql = require('mysql');

var connection = mySql.createConetion({
    host: '',
    port: '',
    user: '',
    password: '',
    database: ''
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = {
    connection
};