const db = require('../models/index');
const Users = db['user'];

exports.get_all_users = (req, res) => {
    Users.findAll()
        .then(users => {
            res.send(users);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving users."
            });
        });
}

