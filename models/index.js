const Nutritionist = require('./Nutritionist');
const Patient = require('./Patient');
const MealPlan = require('./MealPlan');
const Day = require('./Day');
const Meal = require('./Meal');
const DayMeal = require('./DayMeal');
const Ingredient = require('./Ingredient');
const MealIngredient = require('./MealIngredient');

Nutritionist.hasMany(Patient, {
    foreignKey: 'nutritionist_id',
    onDelete: 'CASCADE'
});

Patient.belongsTo(Nutritionist, {
    foreignKey: 'nutritionist_id',
});

Patient.hasMany(MealPlan, {
    foreignKey: 'patient_id',
    onDelete: 'CASCADE'
});

MealPlan.belongsTo(Patient, {
    foreignKey: 'patient_id',
});

MealPlan.hasMany(Day, {
    foreignKey: 'plan_id',
    onDelete: 'CASCADE'
});

Day.belongsTo(MealPlan, {
    foreignKey: 'plan_id',
});

Day.belongsToMany(Meal, {
    through: {
        model: DayMeal,
        unique: false
    }
});

Meal.belongsToMany(Day, {
    through: {
        model: DayMeal,
        unique: false
    }
});

Meal.belongsToMany(Ingredient, {
    through: {
        model: MealIngredient,
        unique: false
    }
});

Ingredient.belongsToMany(Meal, {
    through: {
        model: MealIngredient,
        unique: false
    }
});


module.exports = {Nutritionist, Patient, MealPlan, Day, Meal, DayMeal, Ingredient, MealIngredient};