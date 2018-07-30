module.exports = function(sequelize, DataTypes){
    var Burgers = sequelize.define("Burgers", {
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
    Burgers.associate = function(models){
        Burgers.hasMany(models.Eaters, {foreignKey: 'burgerId'});
    };
    return Burgers;
}