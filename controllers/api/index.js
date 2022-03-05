const router = require("express").Router();

const planRoutes = require("./planRoutes");
const userRoutes = require("./userRoutes");
const clientRoutes = require("./clientRoutes");
const ingredientRoutes = require("./ingredientRoutes");
const dayRoutes = require('./dayRoutes');
const mealRoutes = require('./mealRoutes');
const foodRoutes = require('./foodRoutes');
const mealFoodRoutes = require('./foodRoutes');
const foodIngredientRoutes = require('./foodIngredientRoutes');

router.use("/users", userRoutes);
router.use("/plan", planRoutes);
router.use("/client", clientRoutes);
router.use("/days", dayRoutes);
router.use("/meals", mealRoutes);
router.use("/foods", foodRoutes);
router.use("/mealfoods", mealFoodRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/foodingredients",foodIngredientRoutes);

module.exports = router;
