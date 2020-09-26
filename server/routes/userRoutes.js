const express = require('express');
const router = express.Router();

module.exports = function(app) {
    const user = require('../controller/user.controller.js')

    app.route('/users')
        .get(user.get_all_users)
        .post((req, res) => {
            user.create_new_user
    });

    app.route('/users/:userID')
        .get(user.read_a_user)
        .put(user.update_a_user)
        .delete((req, res) => {
            user.delete_a_user
        }
    );
}