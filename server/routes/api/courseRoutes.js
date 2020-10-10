const router = require('express').Router();
const course = require('../../controllers/course.controller.js')


console.log('course routes');


    router.route('/')
        .get(course.get_all_courses)
        .post(course.create_course, (req, res) => {
             console.log('course post route'), req.body;
        })

    router.route('/:name')
        .get(course.read_a_course)
        // .put(course.update_a_course)
        .delete(course.delete_a_course, (req, res) => {
            console.log('delete course route');
        }
    );

module.exports = router;