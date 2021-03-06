const db = require('../models');
const Holes = db['hole'];
const Courses = db['course'];

exports.get_all_holes = (req, res) => {
    Holes.findAll()
        .then(holes => {
            res.send(holes);
          })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || 'Some error occurred while retrieving holes'
            });
        });
}

exports.create_hole = async (req,res) => {
    // console.log(JSON.stringify(req.body));
    //handles null error
    const findCourse = await Courses.findOne({ where: {courseName: 'Jackson'}});
    const createHole = await Holes.create(req.body)
        .then(hole => {
            res.send('hole created');
            })
        .catch(error => {
                console.log('create a hole error ' + error);
    })
    // console.log(findCourse);
}

exports.read_a_hole = (req, res) => {
    Holes.findOne({ where: {
        id: req.params.Id
    }}).then(hole => {
            res.send(JSON.stringify(hole));
    })
    .catch(error => {
        console.log(error);
    })
}

exports.update_a_hole = (req, res) => {
    
}

exports.delete_a_hole = (req, res) => {
    Holes.delete({ where: {
        id: req.params.Id
    }}).then(hole => {
            res.send(hole);
    })
    .catch(error => {
        console.log(error);
    })  
}