const router = require('express').Router();
const user = require('../../controllers/user.controller.js')


console.log('user routes');


    router.route('/')
        .get(user.get_all_users)
        .post(user.create_user, (req, res) => {
            console.log('user post route'), req.body;
        });
    
    router.route('/login')
        .post(user.login_user);

    router.route('/:userId')
        .get(user.read_a_user)
        // .put(user.update_a_user)
        .delete(user.delete_a_user, (req, res) => {
            console.log('delete user route');
        });

module.exports = router;