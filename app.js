var express = require('express');
var app = express();
var path = require('path');
const http = require('http');
const con = require('./services/db');
const DbController = require('./controllers/databaseController');

app.set('views', __dirname + '/views')
app.use('/public', express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

var dbController = new DbController.dbController(con);

app.get('/', function (req, res) {
    res.render('product_page.html')
})

app.get('/login', function (req, res) {
    res.render('login.html')
})

app.get('/register', function (req, res) {
    res.render('register.html')
})

app.get('/product_review', function (req, res) {
    res.render('review_page.html')
})

app.get('/getreviews', function (req, res) {
    let results = new Object();
    con.connection.query("SELECT * FROM Beer", function (err, result, fields) {
        if (err) {
            throw err;
        }
        else {
            results = result;
            results = JSON.stringify(results);
            console.log(results);
            res.end(results)
        }
    });
})

app.listen(3000, function () {
    console.log('server started on port 3000...')
})
