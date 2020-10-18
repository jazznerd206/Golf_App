const Sequelize = require("sequelize");
const moment = require('moment');


module.exports = function(sequelize, DataTypes) {

    const UserRound = sequelize.define("userRound", {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        userName: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        course: {
            type: Sequelize.STRING(250),
            allowNull: false,
        },
        coursePar: {
            type: Sequelize.INTEGER(2),
            allowNull: false,
            defaultValue: 72
        },
        courseRating: {
            type: Sequelize.FLOAT(4,1),
            allowNull: true,
            defaultValue: 72
        },
        totalScore: {
            type: Sequelize.INTEGER(3),
            allowNull: false
        },
        putts: {
            type: Sequelize.INTEGER(3),
            allowNull: false
        },
        totalAWstrokes: {
            type: Sequelize.INTEGER(3),
            allowNull: false
        }
    })

    UserRound.associate = function(models) {
        UserRound.belongsTo(models.user, {foreignKey: { name: 'userID', allowNull: false }, as: 'rounds'})
    }
    UserRound.associate = function(models) {
        UserRound.hasMany(models.userHole, { foreignKey: { name: 'courseID', allowNull: false }, as: 'userHoles'}
        )
    }

    return UserRound;

    
};