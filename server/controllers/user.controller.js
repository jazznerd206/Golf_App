const Sequelize = require('sequelize');
const models = require('../models'); // loads index.js
const Users = models.user;  
const UserRounds = models.userRound;
const passport = require('passport');

exports.get_all_users = (req, res) => {
    Users.findAll({
        include: [{
            all: true,
            nested: true
        }]
      })
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
    // console.log(req.body.username);
    // console.log(req.body.password);
    if(!req.body.username || !req.body.password){
        res.status(400).send({ error:true, message: 'Please provide name/pass' });
      }
    Users.findOne( { where: { username: req.body.username }})
        .then(user => {
            if (user) {
                console.log(`user found, choose a different name ${user}`)
                return res.json({
                    success: false,
                    username: null,
                    loggedIn: false,
                    error: `Username ${req.body.username} has already been taken.`
                })
            }
            else {
                console.log(`no user found, ready to create`)
                Users.create(req.body).then(user => {
                    return res.json({
                        success: true,
                        username: user.username,
                        loggedIn: true
                    })
                })
                .catch(error => {
                        console.log(error);
                })
            }
        })
        .catch (err => {
            console.log(err)
        })
}

exports.login_user = (req, res, next) => {
    passport.authenticate('local', { session: true, successRedirect: '/dashboard', failureRedirect: '/' } ,function(err, user) {
        if (err) {
            return next(err);
          }
        if (!user) {
            return res.json({ 
                success: false,
                username: null,
                loggedIn: false,
                error: 'Username/Password combination does not exist'
            });
        }
        if (user.password != req.body.password) {
            return res.json({
                success: false,
                username: null,
                loggedIn: false,
                error: 'Username/Password combination does not exist'
            });
        }
        Users.findOne(
            {
                where: {
                    id: user.id
                }, include: [{
                    all: true,
                    nested: true
                  }]
                }).then(data => {
                    req.logIn(user, err => {
                        if (err) {return next(JSON.stringify(err))}
                        // console.log('===============================================================');
                        // console.log('===============================================================');
                        // console.log("logged in user response on front end " + JSON.stringify(user))
                        // console.log('===============================================================');
                        // console.log('===============================================================');
                        return res.json({
                            success: true,
                            username: user.username,
                            id: user.id,
                            data,
                            loggedIn: true
                        })
                    })
                }).catch(err => {
                    console.log(err);
                })
    })(req, res, next)
}

exports.logout_user = (req, res, next) => {
    if (req.user) {
        req.logOut();
        req.session.destroy(function (err) {
            res.json({
                username: null,
                loggedIn: false,
                message: 'Logging out'
            });
        })
    } else {
        res.json({ message: 'No user to log out' });
    }(req, res, next)
}

exports.read_a_user = (req, res, next) => {
    Users.findOne({
        where: {
        id: req.params.userId
    }, include: [{
        all: true,
        nested: true
      }]
    })
    .then(user => {
            res.send(user);
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