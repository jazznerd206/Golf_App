const { Strategy } = require('passport');
const models = require('../models'); // loads index.js
const user = require('../models/user');
const User = models.user; 
// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: 'username' // not necessary, DEFAULT
  },
  function(username, password, next) {
    // console.log(`local strategy ${username}`);
    // console.log(`local strategy ${password}`);
    User.findOne({ where: {
      username: username
        }}).then(user => {
                // console.log(`user object returned === ${user}`)
                // =============================================
                // add some kind of secondary cookie/jwt here sent to the browser for react to be able to find
                // =============================================
                return next(null, user);
        })
        .catch(error => {
            console.log(error);
        })      

    });

module.exports = strategy;