const User = require("../model/userModel.js");

exports.get_all_users = function(req, res) {
    User.getAllUsers(function(err, user) {
        console.log('controller')
        if (err) {
            res.send(err);
        }
        res.send(user);
    })
};

exports.create_user = function(req, res) {
    console.log('create new user controller');  
    //handles null error 
    if(!req.body.name || !req.body.pass){
      res.status(400).send({ error:true, message: 'Please provide name/pass' });
    }
    else {
    User.createUser(['user_name', 'user_pass'], [req.body.name, req.body.pass], function(err, user) {  
        if (err) {
          res.send(err)
        }
        else {
          res.json(user);
        }
    });
  }
};

exports.read_a_user = function(req, res) {
    console.log('get user by id controller');
    console.log(req.params.userId)
    User.getUserById(req.params.userId, function(err, user) {
    if (err)
        res.send(err);
    res.json(user);
    });
};

exports.update_a_user = function(req, res) {
    User.updateById(req.params.userId, new User(req.body), function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.delete_a_user = function(req, res) {
    User.remove(req.params.userId, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    });
  };