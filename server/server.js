const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
let PORT = process.env.PORT || 8080;
let app = express();

// require and connect sequelize to models
const db = require('./models');
const syncOptions = { force: false };

// .env config
require('dotenv').config();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '../client/build')));

// Express middleware
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// initialize a blank return function
app.use( (req, res, next) => {
  return next();
});

const sessionStore = new SequelizeStore({
  db: db.sequelize
})

//passport local strategy
app.use(session({ 
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));

sessionStore.sync();

app.use(passport.initialize());
app.use(passport.session());
require('./Passport/index');

const routes = require('./routes');
app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});