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
        "username": 'root',
        "host": process.env.HOST,
        "use_env_variable": process.env.PORTSGRES_URL,
        "dialect": "postgres"
    }
  };