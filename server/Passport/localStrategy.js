const { Strategy } = require('passport');
const models = require('../models'); // loads index.js
const user = require('../models/user');
const User = models.user; 
// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: 'username'
  },
  function(username, password, next) {
    User.findOne({ where: {
      username: username
        }}).then(user => {
                // console.log(`user object returned === ${user}`)
                // =============================================
                if (!user) {
                  return next(null, false, 'This user does not exist.');
                }
                else if (password != user.password) {
                  return next(null, false, 'You have entered an incorrect password.');
                } else {
                  return next(null, user);
                }
                // =============================================
                
        })
        .catch(error => {
            console.log(error);
        })      

    });

module.exports = strategy;