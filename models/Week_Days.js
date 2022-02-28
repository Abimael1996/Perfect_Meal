const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Week_Days extends Model {}

Week_Days.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        day: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        week_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'weeks',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'week_days',
    }
);