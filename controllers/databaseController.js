class dbController {
    constructor(dbconnection) {
      this.con = dbconnection;
    }

    getreviews(){
        var returnRes = new Object();
        this.con.connection.query("SELECT * FROM Beer", function (err, result, fields) {
            if (err) 
            {
                throw err;
            }
            else
            {
                returnRes = result;

                console.log(returnRes)

                return returnRes;
            }
        })
    }
  }

module.exports = { dbController };