const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Patient extends Model { }

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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        height: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        sex: {
            type: DataTypes.ENUM('Male', 'Female'),
            allowNull: false,
        },
        goal: {
            type: DataTypes.ENUM('Gain', 'Lose', 'Maintain'),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        activity: {
            type: DataTypes.ENUM('Sedentary', 'Light', 'Moderate', 'Heavy', 'Athlete')
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
    modelName: "patient",
  }
);

module.exports = Patient;
