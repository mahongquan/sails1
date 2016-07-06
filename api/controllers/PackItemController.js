/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function (req, res) {
    return res.send("Hi there!");
  },
  logout: function (req, res) {
    return res.redirect("http://www.sina.com");
  },
  signup: function (req, res) {
    return res.redirect("http://www.baidu.com");
  }
};

