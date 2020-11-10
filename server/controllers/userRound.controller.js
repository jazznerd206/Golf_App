const sequelize = require('sequelize');
const db = require('../models');
const UserRounds = db['userRound'];
const UserHoles = db['userHole'];

exports.get_all_userRounds = (req, res) => {
  // console.log(req.params)
  UserRounds.findAll({
    include: [{
      model: UserHoles,
      as: 'userHoles'
    }]
  })
    .then(rounds => {
        res.send(rounds);
      })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving rounds'
        });
    });
}

exports.get_all_userRounds_where = (req, res) => {
  // console.log(req.params.value);
  UserRounds.findOne({
      attributes: { include: [[sequelize.fn('min', sequelize.col('totalScore')), 'totalScore']] },
      raw: true,
      // include: [{
      //   model: UserHoles,
      //   as: 'userHoles'
      // }]
  })
    .then(rounds => {
        res.send(rounds);
      })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving rounds'
        });
    });
}

exports.create_userRound = async (req,res) => {
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

exports.read_a_userRound = (req, res) => {
  UserRounds.findAll({ where: {
        userID: req.params.Id
          }, 
      include: [{
        model: UserHoles,
        as: 'userHoles'
      }]}).then(round => {
          res.send(round);
  })
  .catch(error => {
      console.log(error);
  })
}

exports.get_single_round = (req, res) => {
  UserRounds.findAll({ where: {
        id: req.params.roundID
          }, 
      include: [{
        model: UserHoles,
        as: 'userHoles'
      }]}).then(round => {
          res.send(round);
  })
  .catch(error => {
      console.log(error);
  })
}

exports.delete_a_userRound = (req, res) => {
  UserRounds.destroy({ where: {
      id: req.params.Id
  }}).then(user => {
          res.send(user);
  })
  .catch(error => {
      console.log(error);
  })
  
}