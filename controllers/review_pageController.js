let con = require('../../services/db.js')

con.connection.connect(function(err) {
  if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * from Beer";
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
});