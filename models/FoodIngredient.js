const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FoodIngredient extends Model {}

FoodIngredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        food_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'food',
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
        modelName: 'food_ingredient',
    }
);

module.exports = FoodIngredient;