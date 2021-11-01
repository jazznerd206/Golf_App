require('dotenv').config();

module.exports = {
    "development": {
        "username": 'rarebird',
        "password": process.env.MYSQL_PW,
        "database": 'golf_db',
        "host": 'localhost',
        "dialect": "postgres",
        "logging": false
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