const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MealFood extends Model {}

MealFood.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        meal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'meal',
                key: 'id',
            },
        },
        food_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'food',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'meal_food',
    }
);

module.exports = MealFood;