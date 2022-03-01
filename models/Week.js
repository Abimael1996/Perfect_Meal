const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Week extends Model {}

Week.init(
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
        modelName: 'week',
    }
);

module.exports = Week;