const Sequelize = require('sequelize');
const models = require('../models'); // loads index.js
const Users = models.user;  
const UserRounds = models.userRound;
const passport = require('passport');

exports.get_all_users = (req, res) => {
    Users.findAll({
        include: [{
          model: UserRounds,
          as: 'rounds'
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
                    // console.log(user);
                    console.log(user.username);
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
    // console.log('=================================')
    // console.log('login user on controller');
    // console.log("name " + req.body.username);
    // console.log("password " + req.body.password);
    // console.log('login user on controller');
    // console.log('=================================')
    // console.log(`body parsing ${JSON.stringify(req.body)}`);
    console.log(`req.user before p.auth ${req.user}`)
    passport.authenticate('local', { session: true, successRedirect: '/dashboard', failureRedirect: '/' } ,function(err, user) {
        if (err) {
            return next(err);
          }
        if (!user) {
            return res.json({loggedIn: false});
        }
        // res.redirect('/dashboard')
        //console.log('user in the req.login ' + user);
        req.logIn(user, err => {
            if (err) {return next(JSON.stringify(err))}
            // res.redirect('/dashboard')
            return res.json({
                success: true,
                username: user.username,
                id: user.id,
                loggedIn: true
            })
        })
        // next()
        console.log('req.user after p.auth' + req.user.username)
    })(req, res, next)
}

exports.logout_user = (req, res, next) => {
    if (req.user) {
        req.logOut();
        req.session.destroy(function (err) {
            res.json({ message: 'Logging out' });
        })
    } else {
        res.json({ message: 'No user to log out' });
    }(req, res, next)
}

exports.read_a_user = (req, res, next) => {
    Users.findOne({ where: {
        id: req.params.userId
    }}).then(user => {
            // console.log(`user object returned === ${user}`)
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