const db = require('../models');
const Courses = db['course'];

exports.get_all_courses = (req, res) => {
    Courses.findAll()
        .then(courses => {
            res.send(courses);
          })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || 'Some error occurred while retrieving courses'
            });
        });
}

exports.create_course = (req,res) => {
    console.log(JSON.stringify(req.body));
    //handles null error
    Courses.create(req.body)
        .then(course => {
            console.log(course);
            console.log(course.name);
            res.send('course created');
            })
        .catch(error => {
                console.log('create a course error ' + error);
    })

}

exports.read_a_course = (req, res) => {
    Course.findOne({ where: {
        id: req.params.Id
    }}).then(course => {
            res.send(JSON.stringify(course));
    })
    .catch(error => {
        console.log(error);
    })
}

exports.update_a_course = (req, res) => {
    
}

exports.delete_a_course = (req, res) => {
    Courses.delete({ where: {
        id: req.params.Id
    }}).then(course => {
            res.send(course);
    })
    .catch(error => {
        console.log(error);
    })
    
}