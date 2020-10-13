const db = require('../models');
const UserRounds = db['userRound'];

exports.get_all_rounds = (req, res) => {
    UserRounds.findAll()
        .then(rounds => {
            res.send(rounds);
          })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || 'Some error occurred while retrieving holes'
            });
        });
}

exports.create_round = async (req,res) => {
    console.log(JSON.stringify(req.body));
    console.log(JSON.stringify(req.body));
    //handles null error
    const roundCreate = await UserRounds.create(req.body)
        .then(round => {
            // console.log(course);
            // console.log(course.name);
            res.send('round created');
            })
        .catch(error => {
                console.log('create a round error ' + JSON.stringify(error));
    })
}