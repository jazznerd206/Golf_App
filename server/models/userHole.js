const Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {

    const UserHole = sequelize.define("userHole", {

        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        par: {
            type: Sequelize.INTEGER(1),
            allowNull: false
        },

        handicap: {
            type: Sequelize.INTEGER(1),
            allowNull: false
        },

        yardage: {
            type: Sequelize.INTEGER(4),
            allowNull: false
        },
        score: {
            type: Sequelize.INTEGER(2),
            allowNull: false,
        },
        scoreType: {
          type: Sequelize.INTEGER(2),
          allowNull: false,
        },
        anywayStroke: {
            type: Sequelize.INTEGER(4),
            allowNull: false
        },
        anywayType: {
            type: Sequelize.STRING(100),
            allowNull: true
        }
    })

    UserHole.associate = function(models) {
        UserHole.belongsTo(models.userRound, {foreignKey: { name: 'courseID', allowNull: false }, as: 'userHoles'})
    }

    return UserHole;
}