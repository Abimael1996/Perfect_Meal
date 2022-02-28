const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meals extends Model {}

Meals.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        meal_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        meal_2: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        meal_3: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        meal_4: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        meal_5: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        day_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'week_days',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'meals',
    }
);