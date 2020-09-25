const express = require("express");
const routes = require('./router');
const path = require('path');
const connection = require('./config/connection');
let PORT = process.env.PORT || 8080;
let app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Set up MySQL connection.
const mysql = require("mysql");

connection.query("SELECT * FROM users", (err, res) => {
  if (err) {console.log(err)}
  else {console.log(res)}
})
// console.log(connection)

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });