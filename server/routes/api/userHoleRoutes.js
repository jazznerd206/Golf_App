const router = require('express').Router();
const userHole = require('../../controllers/userHole.controller.js')


console.log('user hole routes');


    router.route('/')
        .get(userHole.get_all_userHoles)
        .post(userHole.create_userHole, (req, res) => {
             console.log('userHole post route'), req.body;
        })

    router.route('/:Id')
        .get(userHole.read_a_userHole)
        // .put(userHole.update_a_userHole)
        // .delete(userHole.delete_a_userHole, (req, res) => {
            // console.log('delete userHole route');
        // }
    // );

module.exports = router;