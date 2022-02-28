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