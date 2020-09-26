var db = require('../config/connection.js');

//Task object constructor
var User = function(user){
    this.name = user.user_name;
    this.pass = user.user_pass;
};
User.createUser = function (newUser, result) {    
    db.query("INSERT INTO users SET ?", newUser, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};
User.getAllUsers = function (result) {
    db.query("SELECT * FROM users", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('users : ', res);  

            result(null, res);
            }
        });   
};
User.getUserById = function (userId, result) {
    db.query("SELECT user FROM users WHERE ID = ?", userId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
User.updateById = function(id, user, result){
    db.query("UPDATE users SET user = ? WHERE id = ?", [user.name, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            }
        else{   
            result(null, res);
        }
    }); 
};
User.remove = function(id, result){
    db.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
        
        result(null, res);
        }
    }); 
};

module.exports = User;