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
    const new_user = new User(req.body);
  
    //handles null error 
     if(!new_user.user_name || !new_user.user_pass){
        res.status(400).send({ error:true, message: 'Please provide name/pass' });
    }
    else{
    
    User.createUser(new_user, function(err, user) {  
        if (err)
            res.send(err);
        res.json(user);
    });
  }
};

exports.read_a_user = function(req, res) {
    console.log('get user by id controller');
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
    User.remove( req.params.userId, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    });
  };