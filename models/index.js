const Nutritionist = require('./Nutritionist');
const Patient = require('./Patient');
const Meal_Plan = require('./Meal_Plan');
const Day = require('./Day');
const Meal = require('./Meal');
const Day_Meal = require('./Day_Meal');
const Ingredient = require('./Ingredient');
const Meal_Ingredient = require('./Meal_Ingredient');

Nutritionist.hasMany(Patient, {
    foreignKey: 'nutritionist_id',
    onDelete: 'CASCADE'
});

Patient.belongsTo(Nutritionist, {
    foreignKey: 'nutritionist_id',
});

Patient.hasMany(Meal_Plan, {
    foreignKey: 'patient_id',
    onDelete: 'CASCADE'
});

Meal_Plan.belongsTo(Patient, {
    foreignKey: 'patient_id',
});

Meal_Plan.hasMany(Day, {
    foreignKey: 'plan_id',
    onDelete: 'CASCADE'
});

Day.belongsTo(Meal_Plan, {
    foreignKey: 'plan_id',
});

Day.belongsToMany(Meal, {
    through: {
        model: Day_Meal,
        unique: false
    }
});

Meal.belongsToMany(Day, {
    through: {
        model: Day_Meal,
        unique: false
    }
});

Meal.belongsToMany(Ingredient, {
    through: {
        model: Meal_Ingredient,
        unique: false
    }
});

Ingredient.belongsToMany(Meal, {
    through: {
        model: Meal_Ingredient,
        unique: false
    }
});


module.exports = {Nutritionist, Patient, Meal_Plan, Day, Meal, Day_Meal, Ingredient, Meal_Ingredient};