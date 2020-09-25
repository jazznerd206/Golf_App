const express = require("express");
const routes = require('./router');
const path = require('path');
// const connection = require('./config/connection');
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

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456789",
  database: "golf_app"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });