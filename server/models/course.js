const Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {

    const Course = sequelize.define("course", {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        courseName: {
            type: Sequelize.STRING(250),
            allowNull: false,
            unique: false
        },
        lengthYards: {
            type: Sequelize.INTEGER(4),
            allowNull: true
        },
        lengthHoles: {
            type: Sequelize.INTEGER(2),
            allowNull: false
        },
        par: {
            type: Sequelize.INTEGER(2),
            allowNull: false
        },
        rating: {
            type: Sequelize.FLOAT(4,1)
        },
    })

    Course.associate = function(models) {
        Course.hasMany(models.hole, {foreignKey: { name: 'courseID', allowNull: false}, as: 'holes'})
      };

    return Course;
};