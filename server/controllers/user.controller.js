const Sequelize = require('sequelize');
const models = require('../models'); // loads index.js
const Users = models.user;  
const passport = require('passport');

exports.get_all_users = (req, res) => {
    Users.findAll()
        .then(users => {
            res.send(users);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || 'Some error occurred while retrieving users'
            });
        });
}

exports.create_user = (req,res) => {
    //handles null error
    console.log(req.body.username);
    console.log(req.body.password);
    if(!req.body.username || !req.body.password){
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

exports.login_user = (req, res, next) => {
    console.log('=================================')
    console.log('login user on controller');
    console.log("name " + req.body.username);
    console.log("password " + req.body.password);
    console.log('login user on controller');
    console.log('=================================')
    // console.log(`body parsing ${JSON.stringify(req.body)}`);
    passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/cannotget' } ,function(err, user) {
        if (err) {
            return next(err);
          }
        if (!user) {
            return res.json({loggedIn: false});
        }
        //console.log('user in the req.login ' + user);
        req.logIn(user, (err) => {
            if (err) {return next(err)}
            return res.json({
                'success': true,
                'user': user,
                'loggedIn': true
            })
        })
        //console.log('req.user ' + req.user.username)
    })(req, res, next)
}

exports.read_a_user = (req, res) => {
    Users.findOne({ where: {
        id: req.params.userId
    }}).then(user => {
            console.log(`user object returned === ${user}`)
            res.send(JSON.stringify(user));
    })
    .catch(error => {
        console.log(error);
    })
}

exports.update_a_user = (req, res) => {
    
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