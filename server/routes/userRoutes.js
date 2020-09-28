const express = require('express');
const router = express.Router();
const user = require('../controller/user.controller.js')


console.log('user routes');

module.exports = function(app) {

    app.route('/users')
        .get(user.get_all_users)
        .post(user.create_user, (req, res) => {
            console.log('user post route'), req.body;
        })

    app.route('/users/:userId')
        .get(user.read_a_user)
        .put(user.update_a_user)
        .delete((req, res) => {
            user.delete_a_user
        }
    );
}