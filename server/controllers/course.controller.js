const db = require('../models');
const Courses = db['course'];
const Holes = db['hole'];

exports.get_all_courses = (req, res) => {
    Courses.findAll({
        include: [{
          model: Holes,
          as: 'holes'
        }]
      })
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

exports.create_course = async (req,res) => {
    console.log(JSON.stringify(req.body));
    console.log(JSON.stringify(req.body));
    //handles null error
    const courseCreate = await Courses.create(req.body)
        .then(course => {
            res.send('course created');
            })
        .catch(error => {
                console.log('create a course error ' + error);
    })
}

exports.read_a_course = (req, res) => {
    Courses.findOne({ where: {
        courseName: req.params.name
    },
        include: [
            {
          model: Holes,
          as: 'holes',
        }
    ]
      }).then(course => {
            res.send(course);
    })
    .catch(error => {
        console.log(error);
    })
}

exports.update_a_course = (req, res) => {
    
}

exports.delete_a_course = (req, res) => {
    Courses.destroy({ where: {
        id: req.params.name
    }})
    .then(course => {
            res.send(`course destroyed ${course}`);
    })
    .catch(error => {
        console.log(error);
    })
    
}