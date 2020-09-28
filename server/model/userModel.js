var db = require('../config/connection.js');

//User object constructor
function User (name, pass) {
    this.name = name,
    this.pass = pass
};

User.createUser = function (tableCols, tableVals, result) {
    // console.log("User.createuser")
    // console.log(`table vals = ${tableVals}`);
    // console.log(`table cols = ${tableCols}`);
    let queryString = "INSERT INTO users (";
    queryString += tableCols;
    queryString += ") VALUES (";
    const tempArray = [];
        for (var i = 0; i < tableVals.length; i++) {
            tempArray.push("?");
        }
    queryString += tempArray.toString() + ")";
    //console.log("user model " + newUser.name, newUser.pass);   
    db.query(queryString, tableVals, function (err, res) {            
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
    db.query(`SELECT * FROM users WHERE id = (${userId})`, function (err, res) {             
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