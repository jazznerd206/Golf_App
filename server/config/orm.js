import connection from '../connection';


const orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM users";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    }
}

module.exports = orm;