const express = require('express');
const course = require('../controllers/course.controller.js')


console.log('course routes');

module.exports = function(app) {

    app.route('/api/courses')
        .get(course.get_all_courses)
        .post(course.create_course, (req, res) => {
             console.log('course post route'), req.body;
        })

    app.route('/api/courses/:Id')
        .get(course.read_a_course)
        // .put(course.update_a_course)
        .delete(course.delete_a_course, (req, res) => {
            console.log('delete course route');
        }
    );
}