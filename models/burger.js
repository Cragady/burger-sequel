// var db = require(__dirname + "/index.js");

// var Allbergs = db.sequelize.define("burgers", {
//     burger_name: db.Sequelize.STRING,
//     devoured: db.Sequelize.BOOLEAN
// });

// Allbergs.sync();

// module.exports = Allbergs;

module.exports = function(sequelize, DataTypes){
    var burgers = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });
    return burgers;
}

//something abour freezetablename :true