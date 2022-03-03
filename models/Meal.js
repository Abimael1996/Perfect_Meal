const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal extends Model {}

Meal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        meal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        day_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'day',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'meal',
    }
);

module.exports = Meal;