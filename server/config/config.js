require('dotenv').config();

// console.log(process.env.MYSQL_PW)
// console.log('+++++++++++++++++++++++++');
// console.log(' === this is the config.js file');
// console.log('+++++++++++++++++++++++++');

module.exports = {
    "development": {
        "username": 'andrew',
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
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
  };