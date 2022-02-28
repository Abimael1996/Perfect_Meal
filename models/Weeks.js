const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weeks extends Model {}

Weeks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        week_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        plan_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'meal_plans',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'weeks',
    }
);