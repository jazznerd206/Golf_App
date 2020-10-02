require('dotenv').config();

// console.log(process.env.MYSQL_PW)
// console.log('+++++++++++++++++++++++++');
// console.log(' === this is the config.js file');
// console.log('+++++++++++++++++++++++++');

module.exports = {
    "development": {
        "username": 'root',
        "password": process.env.MYSQL_PW,
        "database": 'golf_db',
        "host": 'localhost',
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "golf_db_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "golf_db_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
  };

    // HOST: "localhost",
    // USER: "root",
    // PASSWORD: "123456789",
    // DB: "golf_db",
    // dialect: "mysql",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }