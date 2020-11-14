const router = require('express').Router();
const userRound = require('../../controllers/userRound.controller.js');


console.log('user round routes');


    router.route('/')
        .get(userRound.get_all_userRounds)
        .post(userRound.create_userRound, (req, res) => {
            console.log('round post route'), req.body;
        })

    router.route('/single/:roundID')
        .get(userRound.get_single_round)

    router.route('/lowest')
        .get(userRound.get_all_userRounds_lowest)
        
    router.route('/:Id')
        .get(userRound.read_a_userRound)
        // .put(userRound.update_a_userRound)
        .delete(userRound.delete_a_userRound, (req, res) => {
            // console.log('delete userRound route');
        }
    );

module.exports = router;