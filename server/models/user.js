const orm = require('../config/orm.js');

let user = {
    all: function(cb) {
        orm.selectAll(function(res) {
        cb(res);
        });
    },
};


  module.exports = user;