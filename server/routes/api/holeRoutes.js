const router = require('express').Router();
const hole = require('../../controllers/hole.controller.js')


console.log('hole routes');



    router.route('/')
        .get(hole.get_all_holes)
        .post(hole.create_hole, (req, res) => {
             console.log('hole post route'), req.body;
        })

    router.route('/:Id')
        .get(hole.read_a_hole)
        // .put(hole.update_a_hole)
        .delete(hole.delete_a_hole, (req, res) => {
            console.log('delete hole route');
        }
    );

module.exports = router