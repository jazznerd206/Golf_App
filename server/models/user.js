const Sequelize = require("sequelize");


module.exports = function(sequelize, DataTypes) {

    const Users = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING(35),
            allowNull: false,
            unique: false
        },
        password: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    })

    Users.associate = function(models) {
        Users.hasMany(models.userRound, { foreignKey: { name: 'userID', allowNull: false }, as: 'rounds'}
        )
    }

    return Users;



    
};