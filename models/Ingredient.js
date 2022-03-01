const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}


Ingredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        calories: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        protein: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        fat: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        carbs: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        meal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'meal',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredient',
    }
);

module.exports = Ingredient;