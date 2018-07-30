module.exports = function(sequelize, DataTypes){
    var Eater = sequelize.define("Eaters", {
        eater_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        burgerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    Eater.associate = function(models){
        Eater.belongsTo(models.Burgers, {foreignKey: 'burgerId'});
    }
    return Eater;
}