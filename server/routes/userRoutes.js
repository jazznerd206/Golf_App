const express = require('express');
const user = require('../controllers/user.controller.js')


console.log('user routes');

module.exports = function(app) {

    app.route('/api/users')
        .get(user.get_all_users)
        .post(user.create_user, (req, res) => {
             console.log('user post route'), req.body;
        })

    app.route('/api/users/:userId')
        .get(user.read_a_user)
        // .put(user.update_a_user)
        .delete(user.delete_a_user, (req, res) => {
            console.log('delete user route');
        }
    );
}