const router = require("express").Router();

const planRoutes = require("./planRoutes");
const userRoutes = require("./userRoutes");
const clientRoutes = require("./clientRoutes");
const noteRoutes = require("./noteRoutes");
const dayRoutes = require('./dayRoutes');
const mealRoutes = require('./mealRoutes');
const foodRoutes = require('./foodRoutes');

router.use("/users", userRoutes);
router.use("/plan", planRoutes);
router.use("/client", clientRoutes);
router.use("/days", dayRoutes);
router.use("/meals", mealRoutes);
router.use("/foods", foodRoutes);
router.use("/notes", noteRoutes);

module.exports = router;
