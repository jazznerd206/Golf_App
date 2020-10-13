const router = require('express').Router();
const userRound = require('../../controllers/userRound.controller.js')


console.log('user round routes');


    router.route('/')
        .get(userRound.get_all_rounds)
        .post(userRound.create_round, (req, res) => {
             console.log('round post route'), req.body;
        })

    router.route('/:Id')
        // .get(userRound.read_a_round)
        // .put(userRound.update_a_round)
        // .delete(userRound.delete_a_round, (req, res) => {
            // console.log('delete round route');
        // }
    // );

module.exports = router;