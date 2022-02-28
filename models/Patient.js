const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patient extends Model {}

Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },

        weight: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        height: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        sex: {
            type: DataTypes.ENUM,
            allowNull: false,
        },

        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        nutritionist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'nutritionist',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'patient',
    }
);

module.exports = Patient;