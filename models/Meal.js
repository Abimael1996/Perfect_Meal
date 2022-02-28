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
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        protein: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        fat: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        carbs: {
            type: DataTypes.DECIMAL,
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