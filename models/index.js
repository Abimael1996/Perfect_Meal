const Nutritionist = require('./Nutritionist');
const Patient = require('./Patient');
const MealPlan = require('./MealPlan');
const Day = require('./Day');
const Meal = require('./Meal');
const Food = require('./Food');
const MealFood = require('./MealFood');
const Ingredient = require('./Ingredient');
const FoodIngredient = require('./FoodIngredient');

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

Day.hasMany(Meal, {
    foreignKey: "day_id",
    onDelete: "CASCADE"
});

Meal.belongsTo(Day, {
    foreignKey: "day_id",
});

Meal.belongsToMany(Food, {
    through: {
        model: MealFood,
        unique: false
    }
});

Food.belongsToMany(Meal, {
    through: {
        model: MealFood,
        unique: false
    }
});

Food.belongsToMany(Ingredient, {
    through: {
        model: FoodIngredient,
        unique: false
    }
});

Ingredient.belongsToMany(Food, {
    through: {
        model: FoodIngredient,
        unique: false
    }
});


module.exports = {Nutritionist, Patient, MealPlan, Day, Meal, Food, MealFood, Ingredient, FoodIngredient};