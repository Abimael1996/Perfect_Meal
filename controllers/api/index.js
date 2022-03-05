const router = require("express").Router();

const planRoutes = require("./planRoutes");
const userRoutes = require("./userRoutes");
const clientRoutes = require("./clientRoutes");
const ingredientRoute = require("./ingredientRoutes");

router.use("/users", userRoutes);
router.use("/plan", planRoutes);
router.use("/client", clientRoutes);
router.use("/ingredients", ingredientRoute);

module.exports = router;
