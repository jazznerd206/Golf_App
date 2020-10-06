const passport = require('passport');
const localStrategy = require('./localStrategy');
const db = require('../models/user');

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  console.log('*** serializeUser called, user: ');
  console.log(user); // the whole raw user object!
  console.log('---------');
  done(null, user);
});

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  console.log('DeserializeUser called');
});

//  Use Strategies
passport.use(localStrategy);

module.exports = passport;