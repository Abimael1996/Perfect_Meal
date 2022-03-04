const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Day extends Model {}

Day.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        day: {
            type: DataTypes.ENUM('1','2','3','4','5','6','7'),
            allowNull: false,
        },
        plan_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'meal_plan',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'day',
    }
);

module.exports = Day;