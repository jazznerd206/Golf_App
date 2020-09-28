const express = require("express");
var router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
let PORT = process.env.PORT || 8080;
let app = express();

// Express middleware
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Set up MySQL connection.
// const connection = require('./config/connection');



// IMPORT AND REGISTER ROUTES
const routes = require('./routes/userRoutes.js');
routes(app);
require('./routes/userRoutes.js')(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });