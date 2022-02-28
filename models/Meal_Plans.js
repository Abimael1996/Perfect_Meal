const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal_Plans extends Model {}

Meal_Plans.init(
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

        patient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'patient',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'meal_plans',
    }
);

module.exports = Meal_Plans;