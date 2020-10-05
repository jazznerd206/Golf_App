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
        passwd: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    })

    return Users;

    
};