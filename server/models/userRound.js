const Sequelize = require("sequelize");


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
            defaultValue: new Date()
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
            allowNull: false,
            defaultValue: 72
        },
    })

    UserRound.associate = function(models) {
        UserRound.belongsTo(models.user, {foreignKey: { name: 'userID', allowNull: false }, as: 'rounds'})
    }

    return UserRound;

    
};