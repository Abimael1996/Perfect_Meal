const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MealIngredient extends Model {}

MealIngredient.init(
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
        ingredient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ingredient',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'meal_ingredient',
    }
);

module.exports = MealIngredient;