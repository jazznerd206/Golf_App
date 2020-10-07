const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
let PORT = process.env.PORT || 8080;
let app = express();

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


//passport local strategy
app.use(session({ 
  secret: 'secret',
  resave: false, // Required
  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
require('./Passport/index');



// IMPORT AND REGISTER ROUTES
// const userRoutes = require('./routes/userRoutes.js');
// userRoutes(app, passport);
// const courseRoutes = require('./routes/courseRoutes.js');
// courseRoutes(app, passport);
// const holeRoutes = require('./routes/holeRoutes.js');
// holeRoutes(app, passport);
//require('./routes/userRoutes.js')(app);

const routes = require('./routes');
app.use(routes);


// require and connect sequelize to models
const db = require('./models');
const syncOptions = { force: false };

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

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
//   });