const Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {

    const Hole = sequelize.define("hole", {

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
    })

    Hole.associate = function(models) {
        Hole.belongsTo(models.course, {foreignKey: 'name', as: 'course'})
    }

    return Hole;
}