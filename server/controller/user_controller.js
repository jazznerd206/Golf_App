const express = require("express");
const connection = require("../config/connection.js");

const router = express.Router();
const mysql = require('mysql');
const connection = require('../config/connection');

const user = require("../models/user.js");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.connection.query('SELECT * FROM USERS', (err, data) => {
            if (err) {res.send(err)}
            else res.json({users: data});
        })
    });
}