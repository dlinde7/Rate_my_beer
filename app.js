var express = require('express');
var app = express();
var path = require('path');
const http = require('http');
const con = require('./services/db');
const DbController = require('./controllers/databaseController');

app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

var dbController = new DbController.dbController(con);

app.get('/', function (req, res) {
  res.render('product_page.html');
});

app.get('/login', function (req, res) {
  res.render('login.html');
});

app.get('/register', function (req, res) {
  res.render('register.html');
});

app.get('/product_review', function (req, res) {
  res.render('review_page.html');
});

app.get('/getbeers', function (req, res) {
  let results = new Object();
  con.connection.query('SELECT * FROM Beer', function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      results = result;
      results = JSON.stringify(results);
      console.log(results);
      res.end(results);
    }
  });
});

app.get('/getproduct', function (req, res) {
  var id = req.query.id;
  var queryString = 'SELECT * FROM ratemybeer.Beer WHERE idBeer=' + id + ';';
  con.connection.query(queryString, function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      result = result[0];
      result = JSON.stringify(result);
      res.end(result);
    }
  });
});

app.get('/get_product_reviews', function (req, res) {
  var id = req.query.productId;
  var queryString = 'SELECT * FROM ratemybeer.Review_view WHERE idBeer=' + id + ';';
  con.connection.query(queryString, function (err, result, fields) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      result = JSON.stringify(result);
      res.end(result);
    }
  });
});
app.post('/add_review', function (req, res) {});
app.listen(3000, function () {
  console.log('server started on port 3000...');
});
