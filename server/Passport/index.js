const passport = require('passport');
const localStrategy = require('./localStrategy');
const models = require('../models'); // loads index.js
const User = models.user; 

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  // console.log('*** serializeUser called, user: ');
  // console.log(user); // the whole raw user object!
  // console.log('---------');
  done(null, user);
});

// user object attaches to the request as req.user
passport.deserializeUser((user, done) => {
  // console.log('DeserializeUser called');
  User.findOne({ where: {username: user.username}})
    .then(user => {
    // console.log('======= user ===========')
    // console.log(user)
    // console.log('========================')
    done(null, user);
  })
});

//  Use Strategies
passport.use(localStrategy);

module.exports = passport;