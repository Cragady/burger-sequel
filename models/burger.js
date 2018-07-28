var orm = require("../config/orm.js");
var db = require(__dirname + "/index.js");

var Allbergs = db.sequelize.define("burgers", {
    burger_name: db.Sequelize.STRING,
    devoured: db.Sequelize.BOOLEAN
});

Allbergs.sync();

module.exports = Allbergs;