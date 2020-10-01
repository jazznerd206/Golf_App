const db = require('../models');
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

exports.create_user = (req,res) => {
    //handles null error
    console.log(req.body.username);
    console.log(req.body.passwd);
    if(!req.body.username || !req.body.passwd){
        res.status(400).send({ error:true, message: 'Please provide name/pass' });
      }
    Users.create(req.body).then(user => {
            console.log(user);
            console.log(user.username);
            res.send('ok');
        })
    .catch(error => {
            console.log(error);
    })

}

exports.read_a_user = (req, res) => {
    Users.findOne({ where: {
        id: req.params.userId
    }}).then(user => {
        res.send(JSON.stringify(user));
    })
    .catch(error => {
        console.log(error);
    })
}

exports.delete_a_user = (req, res) => {
    Users.delete({ where: {
        id: req.params.userId
    }}).then(user => {
        res.send(user);
    })
    .catch(error => {
        console.log(error);
    })
    
}