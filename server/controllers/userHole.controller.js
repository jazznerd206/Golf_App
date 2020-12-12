const db = require('../models');
const UserHoles = db['userHole'];

exports.get_all_userHoles = (req, res) => {
    UserHoles.findAll()
        .then(holes => {
            res.send(holes);
          })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || 'Some error occurred while retrieving userHoles'
            });
        });
}

exports.create_userHole = async (req,res) => {
    console.log(JSON.stringify(req.body));
    console.log(JSON.stringify(req.body));
    //handles null error
    const userHoleCreate = await UserHoles.create(req.body)
        .then(userHole => {
            res.send('userHole created');
            })
        .catch(error => {
                console.log('create a userHole error ' + JSON.stringify(error));
    })
}

exports.read_a_userHole = (req, res) => {
    UserHoles.findOne({ where: {
        id: req.params.Id
    }}).then(userHole => {
            res.send(userHole);
    })
    .catch(error => {
        console.log(error);
    })
}

exports.read_all_userHoles_where = (req, res) => {
    const urlParams = JSON.parse(req.params.options)
    UserHoles.findAll(urlParams)
        .then(holes => {
            res.send(holes);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving userHoles'
            });
        });
    }