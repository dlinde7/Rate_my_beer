var User = require('../models/User');
var md5 = new require('md5');

class Auth {
  constructor(bdController) {
    this.username = '';
    this.password = '';
  }

  login(username, password) {
    var user = dbController.getUser(username);

    if (user) {
      var hash = md5(password);
      if (user.getPassword() == hash) {
        return true;
      } else return false;
    } else {
      return true;
    }
  }

  register(username, password) {
    if (!dbController.userExist()) {
      var hash = md5(password);
      dbController.addUser(new User(username, hash));
    } else {
      //user exists
    }
  }
}
