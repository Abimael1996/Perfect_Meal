const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
    weight: {
      type: DataTypes.FLOAT(11, 1),
      allowNull: false,
      validate: {
        min: 1,
      }
    },
    height: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 1,
      }
    },
    sex: {
      type: DataTypes.ENUM("Male", "Female"),
      allowNull: false,
    },
    goal: {
      type: DataTypes.ENUM("Gain", "Lose", "Maintain"),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      }
    },
    activity: {
      type: DataTypes.ENUM(
        "Sedentary",
        "Light",
        "Moderate",
        "Heavy",
        "Athlete"
      ),
    },
    nutritionist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "nutritionist",
        key: "id",
      },
    },
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
